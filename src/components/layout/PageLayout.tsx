import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PageLayoutProps {
  title: string;
  description: string;
  canonical: string;
  children: React.ReactNode;
}

const TELEGRAM_URL = "https://t.me/sugar_TS";
const TELEGRAM_HANDLE = "@sugar_TS";

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  canonical,
  children,
}) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let linkCanonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;
  }, [title, description, canonical]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-black border-b border-[hsl(var(--gold)/0.25)]">
        <nav className="container mx-auto flex items-center justify-between h-14 px-4 sm:px-6">
          <a
            href="/"
            className="font-heading text-xl font-bold tracking-widest text-[hsl(var(--gold))] hover:opacity-80 transition-opacity uppercase"
          >
            Натали
          </a>
          <Button
            asChild
            className="hidden sm:inline-flex bg-[hsl(var(--gold))] text-black font-semibold hover:bg-[hsl(var(--gold)/0.85)] transition-colors h-9 px-5 text-sm rounded-md"
          >
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Send" className="w-4 h-4 mr-1.5" />
              Записаться
            </a>
          </Button>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20 sm:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[hsl(var(--gold)/0.25)] text-sm text-white/70">
        <div className="container mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-heading font-bold text-base text-[hsl(var(--gold))] tracking-widest uppercase">
              Натали
            </span>
            <address className="not-italic flex items-start gap-2 text-white/60">
              <Icon name="MapPin" className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
              <span>Екатеринбург, ул. Культуры 2, каб. 115.3</span>
            </address>
            <div className="flex items-center gap-2 text-white/60">
              <Icon name="Clock" className="w-4 h-4 shrink-0 text-[hsl(var(--gold))]" />
              <span>10:00–20:00 ежедневно</span>
            </div>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[hsl(var(--gold))] hover:opacity-80 transition-opacity font-medium"
          >
            <Icon name="Send" className="w-4 h-4" />
            {TELEGRAM_HANDLE}
          </a>
        </div>

        <div className="border-t border-white/10 py-3 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Натали. Все права защищены.
        </div>
      </footer>

      {/* Fixed mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-black border-t border-[hsl(var(--gold)/0.35)] px-4 py-3 flex items-center justify-center">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-2 bg-[hsl(var(--gold))] text-black font-heading font-bold text-sm uppercase tracking-widest rounded-md h-11 hover:bg-[hsl(var(--gold)/0.85)] transition-colors"
        >
          <Icon name="Send" className="w-4 h-4" />
          Записаться {TELEGRAM_HANDLE}
        </a>
      </div>
    </div>
  );
};

export default PageLayout;
