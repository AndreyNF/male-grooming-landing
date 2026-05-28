import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

interface BlogHeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  showCta?: boolean;
}

const BlogHero = ({
  title,
  subtitle,
  ctaLabel = 'Записаться на депиляцию воском',
  showCta = true,
}: BlogHeroProps) => {
  return (
    <section className="bg-black text-white py-10 sm:py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-sm sm:text-base mb-8">{subtitle}</p>
        )}
        {showCta && (
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              {ctaLabel}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
};

export default BlogHero;
