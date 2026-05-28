import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

export interface BlogCtaLink {
  to: string;
  label: string;
}

interface BlogCtaProps {
  title?: string;
  subtitle?: string;
  hint?: string;
  links?: BlogCtaLink[];
}

const DEFAULT_LINKS: BlogCtaLink[] = [
  { to: '/depilyaciya/', label: 'Все зоны депиляции →' },
  { to: '/zagar/', label: 'Моментальный загар →' },
];

const BlogCta = ({
  title = 'Записаться на восковую депиляцию',
  subtitle = 'Натали, ул. Культуры 2, каб. 115.3. Ежедневно 10:00–20:00.',
  hint = 'Хотите попробовать — запишитесь на первую процедуру.',
  links = DEFAULT_LINKS,
}: BlogCtaProps) => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
          {title}
        </h2>
        <p className="text-white/70 text-base mb-8">{subtitle}</p>
        {hint && <p className="text-white/60 text-sm mb-6">{hint}</p>}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6"
        >
          <Button
            size="lg"
            className="bg-gold text-black hover:bg-gold/85 font-semibold px-10 py-3 text-lg"
          >
            <Icon name="Send" className="w-5 h-5 mr-2" />
            Написать @sugar_TS
          </Button>
        </a>
        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCta;
