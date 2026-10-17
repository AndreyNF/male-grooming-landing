import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import {componentTagger} from "pp-tagger";

// https://vitejs.dev/config/
// HMR-сокет превью рвёт инфраструктура: ingress-nginx на каждом reload
// конфига (захват/освобождение любого dev-пода) через 30 с закрывает все
// соединения старых воркеров; DDoS Guard режет «тихие» соединения. Сам vite
// на любой обрыв перезагружает страницу. Плагин держит превью живым:
// - сервер шлёт состояние «boot:seq» сразу после каждой рассылки клиентам
//   (update, full-reload, error...) и раз в 5-9 с — это и двусторонний
//   keepalive для DDoS Guard (рандом — чтобы не ловить его фильтр одинаковых
//   интервалов). boot меняется на рестарте vite, seq — на каждой рассылке;
// - клиент (скрипт в index.html) подменяет сокет vite-hmr «вечным»: на
//   обрыве тихо переподключается и перезагружает страницу, только если за
//   время разрыва сервер рестартовал или что-то разослал. Не переподключился
//   с трёх попыток — отдаёт обрыв vite, дальше как раньше (ждёт сервер и
//   перезагружает).
// Клиентский ping понижен до 7 с через server.hmr.timeout ниже.
const hmrClient = `(() => {
    const NativeWebSocket = WebSocket;
    class HmrSocket extends EventTarget {
        OPEN = 1;
        readyState = 0;
        state = "";
        queue = [];
        constructor(url, protocols) {
            super();
            this.url = url;
            this.protocols = protocols;
            this.connect(0);
        }
        connect(attempt) {
            const ws = this.ws = new NativeWebSocket(this.url, this.protocols);
            let fresh = true;
            ws.onopen = () => {
                attempt = 0;
                this.queue.splice(0).forEach((data) => ws.send(data));
                if (this.readyState === 0) {
                    this.readyState = 1;
                    this.dispatchEvent(new Event("open"));
                }
            };
            ws.onmessage = (event) => {
                if (event.data.includes('"ezst:hmr"')) {
                    const state = JSON.parse(event.data).data;
                    if (fresh && this.state && this.state !== state) return location.reload();
                    fresh = false;
                    this.state = state;
                }
                this.dispatchEvent(new MessageEvent("message", {data: event.data}));
            };
            ws.onclose = (event) => {
                if (this.readyState === 3) return;
                if (!this.state || attempt === 3) {
                    this.readyState = 3;
                    return this.dispatchEvent(new CloseEvent("close", event));
                }
                setTimeout(() => this.connect(attempt + 1), attempt * 1000);
            };
        }
        send(data) {
            if (this.ws.readyState === 1) this.ws.send(data);
            else this.queue.push(data);
        }
        close(code, reason) {
            this.readyState = 3;
            this.ws.close(code, reason);
        }
    }
    window.WebSocket = new Proxy(NativeWebSocket, {
        construct: (target, args) => args[1] === "vite-hmr" ? new HmrSocket(...args) : new target(...args),
    });
})();`;

const hmrKeepalive = {
    name: 'hmr-ws-keepalive',
    apply: 'serve' as const,
    configureServer(server: any) {
        const boot = Date.now().toString(36);
        let seq = 0;
        const state = () => ({type: 'custom', event: 'ezst:hmr', data: `${boot}:${seq}`});
        const broadcast = server.ws.send.bind(server.ws);
        server.ws.send = (...args: any[]) => {
            seq++;
            broadcast(...args);
            broadcast(state());
        };
        server.ws.on('connection', (socket: any) => socket.send(JSON.stringify(state())));
        let timer: ReturnType<typeof setTimeout> | null = null;
        const tick = () => {
            broadcast(state());
            timer = setTimeout(tick, 5000 + Math.floor(Math.random() * 4000));
        };
        timer = setTimeout(tick, 5000 + Math.floor(Math.random() * 4000));
        server.httpServer?.on('close', () => {
            if (timer) clearTimeout(timer);
        });
    },
    transformIndexHtml: () => [{tag: 'script', children: hmrClient, injectTo: 'head-prepend' as const}],
};

const OG_PAGES: Record<string, string> = {
    '/': 'src/pages/Index.tsx',
    '/zagar/': 'src/pages/Zagar.tsx',
    '/kontakty/': 'src/pages/Kontakty.tsx',
    '/depilyaciya/': 'src/pages/depilyaciya/Index.tsx',
    '/depilyaciya/ekaterinburg/': 'src/pages/depilyaciya/Ekaterinburg.tsx',
    '/depilyaciya/voskom/': 'src/pages/depilyaciya/Voskom.tsx',
    '/depilyaciya/bikini/': 'src/pages/depilyaciya/Bikini.tsx',
    '/depilyaciya/boroda/': 'src/pages/depilyaciya/Boroda.tsx',
    '/depilyaciya/nogi-ruki/': 'src/pages/depilyaciya/NogiRuki.tsx',
    '/blog/shugaring-vs-vosk/': 'src/pages/blog/ShugaringVsVosk.tsx',
};

const escAttr = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escText = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const setMetaTag = (html: string, attr: 'property' | 'name', key: string, value: string) => {
    const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
    return re.test(html) ? html.replace(re, (_m, a, b) => a + escAttr(value) + b) : html;
};

let ogOutDir = '';

const ogPerPage = {
    name: 'og-per-page-html',
    apply: 'build' as const,
    configResolved(config: any) {
        ogOutDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
        const dist = ogOutDir || path.resolve(__dirname, 'dist');
        const basePath = path.join(dist, 'index.html');
        if (!fs.existsSync(basePath)) return;
        const base = fs.readFileSync(basePath, 'utf-8');
        for (const [route, file] of Object.entries(OG_PAGES)) {
            const src = fs.readFileSync(path.resolve(__dirname, file), 'utf-8');
            const pick = (name: string) => src.match(new RegExp(`${name}="([^"]*)"`))?.[1];
            const title = pick('title');
            const description = pick('description');
            const canonical = pick('canonical');
            if (!title || !description || !canonical) continue;
            let html = base;
            html = html.replace(/<title>[^<]*<\/title>/, `<title>${escText(title)}</title>`);
            html = setMetaTag(html, 'name', 'description', description);
            html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_m, a, b) => a + escAttr(canonical) + b);
            const type = route.startsWith('/blog/') ? 'article' : 'website';
            html = setMetaTag(html, 'property', 'og:type', type);
            html = setMetaTag(html, 'property', 'og:url', canonical);
            html = setMetaTag(html, 'property', 'og:title', title);
            html = setMetaTag(html, 'property', 'og:description', description);
            html = setMetaTag(html, 'name', 'twitter:url', canonical);
            html = setMetaTag(html, 'name', 'twitter:title', title);
            html = setMetaTag(html, 'name', 'twitter:description', description);
            if (route === '/') {
                fs.writeFileSync(basePath, html);
                continue;
            }
            const dir = path.join(dist, route);
            fs.mkdirSync(dir, {recursive: true});
            fs.writeFileSync(path.join(dir, 'index.html'), html);
        }
    },
};

export default defineConfig(({mode}) => ({
    plugins: [
        hmrKeepalive,
        ogPerPage,
        react(),
        mode === 'development' &&
        componentTagger(),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: true,
        hmr: {
            timeout: 7000,
            overlay: false // Disables the error overlay if you only want console errors
        }
    },
}));
