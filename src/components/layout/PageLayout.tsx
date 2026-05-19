import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const NAV_LINKS = [
  { label: "Депиляция", to: "/depilyaciya/" },
  { label: "Автозагар", to: "/zagar/" },
  { label: "Цены", to: "/depilyaciya/voskom/" },
  { label: "Контакты", to: "/kontakty/" },
];

const FOOTER_LINKS = [
  { label: "Депиляция воском", to: "/depilyaciya/" },
  { label: "Борода", to: "/depilyaciya/boroda/" },
  { label: "Бикини", to: "/depilyaciya/bikini/" },
  { label: "Ноги и руки", to: "/depilyaciya/nogi-ruki/" },
  { label: "Автозагар", to: "/zagar/" },
  { label: "Контакты", to: "/kontakty/" },
  { label: "Воск vs шугаринг", to: "/blog/shugaring-vs-vosk/" },
];

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  canonical,
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-xl font-bold tracking-widest text-[hsl(var(--gold))] hover:opacity-80 transition-opacity uppercase shrink-0"
          >
            Натали
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                  pathname === link.to
                    ? "text-[hsl(var(--gold))]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + mobile burger */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex bg-[hsl(var(--gold))] text-black font-semibold hover:bg-[hsl(var(--gold)/0.85)] transition-colors h-9 px-5 text-sm rounded-md"
            >
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="w-4 h-4 mr-1.5" />
                Записаться
              </a>
            </Button>

            {/* Burger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-[hsl(var(--gold)/0.15)] px-4 pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-2.5 px-3 text-sm font-medium rounded transition-colors ${
                    pathname === link.to
                      ? "text-[hsl(var(--gold))] bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-[hsl(var(--gold))] text-black font-semibold text-sm rounded-md h-10"
              >
                <Icon name="Send" className="w-4 h-4" />
                Записаться в Telegram
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-black border-t border-[hsl(var(--gold)/0.25)] text-sm text-white/70">
        <div className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-heading font-bold text-base text-[hsl(var(--gold))] tracking-widest uppercase">
              Натали
            </span>
            <address className="not-italic flex items-start gap-2 text-white/60">
              <Icon name="MapPin" className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
              <span>г. Екатеринбург, ул. Культуры, 2, каб. 115.3</span>
            </address>
            <div className="flex items-center gap-2 text-white/60">
              <Icon name="Clock" className="w-4 h-4 shrink-0 text-[hsl(var(--gold))]" />
              <span>10:00–20:00 ежедневно</span>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[hsl(var(--gold))] hover:opacity-80 transition-opacity font-medium mt-1"
            >
              <Icon name="Send" className="w-4 h-4" />
              {TELEGRAM_HANDLE}
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Услуги</p>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Запись</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Записаться можно через Telegram — отвечаю ежедневно с 10:00 до 20:00.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-black font-semibold text-sm rounded-md h-10 px-4 hover:bg-[hsl(var(--gold)/0.85)] transition-colors w-fit"
            >
              <Icon name="Send" className="w-4 h-4" />
              Написать @sugar_TS
            </a>
          </div>
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