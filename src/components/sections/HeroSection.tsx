import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PhoneButton from '@/components/PhoneButton';

const SIZES = '(min-width: 1024px) 512px, (min-width: 416px) 384px, calc(100vw - 32px)';
const SRCSET = {
  avif: `https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/04e7212e-87b3-4db6-b439-dc1a428ad10f.avif 640w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/937b944a-3a13-48bd-83e5-90df068ce173.avif 960w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/5ce10a51-5abc-4660-93c7-30c2dc7bee14.avif 1280w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/091116c4-6343-491f-857c-d2be53fdd0a1.avif 1600w`,
  webp: `https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/d3b2af2e-c67c-40a7-a6f7-c958d68e8822.webp 640w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/22c9af10-42a7-4179-a295-f5ced98d3242.webp 960w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/b0ece20f-b80b-4d9a-82b4-2a57cf71e4a1.webp 1280w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/2860689c-7137-41b1-8e32-1ed09a9d3c31.webp 1600w`,
  jpg: `https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/e7c66b07-4dc7-417c-bac0-87af37bb2054.jpg 640w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/cc55be13-5460-4004-aefe-ff9e046a073e.jpg 960w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/d75e5fdc-7966-4080-a53e-4155c10b293f.jpg 1280w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/546575d6-3790-4397-935a-faf1121d9b25.jpg 1600w`,
};

const HeroPicture = () => (
  <picture>
    <source type="image/avif" srcSet={SRCSET.avif} sizes={SIZES} />
    <source type="image/webp" srcSet={SRCSET.webp} sizes={SIZES} />
    <img
      src="https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/d75e5fdc-7966-4080-a53e-4155c10b293f.jpg"
      srcSet={SRCSET.jpg}
      sizes={SIZES}
      width={1600}
      height={900}
      alt="Натали — мастер мужской депиляции воском"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className="w-full h-auto object-cover"
      style={{ aspectRatio: '16/9' }}
    />
  </picture>
);

const HeroSection = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-8 lg:pb-12 bg-background">
      {/* Desktop Layout */}
      <div className="hidden lg:flex container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-gold">
              Мужская депиляция воском и автозагар в Екатеринбурге
            </h1>
            <p className="text-lg text-foreground/70">
              Работаю только с мужчинами. Без очередей, без суеты — личный кабинет, стерильно, комфортно.
            </p>
            <p className="text-sm text-foreground/50"><Icon name="MapPin" size={14} className="inline mr-1" />ул. Культуры, 2, каб. 115.3 · Ежедневно 10:00–20:00</p>
            <div className="flex flex-wrap gap-4">
              <a id="hero-cta-desktop" href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/85 font-bold px-6 py-[14px] h-auto rounded-lg text-lg animate-scale-in shadow-lg">Записаться в Telegram</Button>
              </a>
              <PhoneButton place="hero" />
              <Button variant="outline" size="lg" className="bg-transparent border-[1.5px] border-gold text-gold hover:bg-gold hover:text-black font-semibold px-6 py-[14px] h-auto rounded-lg text-lg">
                <Icon name="MapPin" size={20} className="mr-2" />
                Екатеринбург
              </Button>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-steel/30">
              <p className="text-xl text-foreground font-normal leading-relaxed">
                Записаться можно через Telegram — отвечаю ежедневно с 10:00 до 20:00. Без предоплаты.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold font-semibold">
                <Icon name="Star" size={13} />с 2021 года
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold font-semibold">
                <Icon name="Shield" size={13} />только мужчины
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold font-semibold">
                <Icon name="Sparkles" size={13} />стерильно
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-steel/30 to-gold/20 rounded-full blur-3xl opacity-30 -z-10 scale-110"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gold/35">
                <HeroPicture />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden container mx-auto px-4">
        <div className="space-y-8">
          <div className="relative w-full max-w-sm mx-auto mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gold/35">
              <HeroPicture />
            </div>
          </div>
          <div className="text-center space-y-6">
            <p className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-gold">
              Мужская депиляция воском и автозагар в Екатеринбурге
            </p>
            <p className="text-base text-foreground/70">
              Только мужчины · ул. Культуры, 2 · 10:00–20:00
            </p>
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
              <p className="text-lg text-foreground font-normal leading-relaxed">
                Работаю только с мужчинами. Без очередей, без суеты — личный кабинет, стерильно, комфортно.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <a id="hero-cta" href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                <Button size="lg" className="w-full bg-gold text-black hover:bg-gold/85 font-bold px-6 py-[14px] h-auto rounded-lg text-lg animate-scale-in shadow-lg">Записаться в Telegram</Button>
              </a>
              <PhoneButton place="hero" />
              <Button variant="outline" size="lg" className="bg-transparent border-[1.5px] border-gold text-gold hover:bg-gold hover:text-black font-semibold px-6 py-[14px] h-auto rounded-lg text-lg">
                <Icon name="MapPin" size={20} className="mr-2" />
                Екатеринбург
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;