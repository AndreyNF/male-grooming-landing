import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';

const LEGS_ROWS = [
  { label: 'Ноги (полностью)', price: '2 000 ₽' },
  { label: 'Голень', price: '1 000 ₽' },
  { label: 'Руки (полностью)', price: '1 200 ₽' },
];

const DepilyaciyaNogRukMuzhchiny = () => (
  <PageLayout
    title="Депиляция ног для мужчин | Натали"
    description="Ноги 2 000 ₽, голень 1 000 ₽, руки 1 200 ₽. Екатеринбург, @sugar_TS"
    canonical="https://sugarts.ru/blog/depilyaciya-nog-ruk-muzhchiny/"
  >
    <BlogHero
      title="Депиляция ног и рук у мужчин"
      subtitle="Шорты, велосипед, бассейн — прайс в Екатеринбурге."
    />
    <ProseSection title="Голень или ноги целиком">
      <p>
        <strong className="text-black">Голень — 1 000 ₽</strong> под шорты.{' '}
        <strong className="text-black">Ноги полностью — 2 000 ₽</strong>.{' '}
        <strong className="text-black">Руки — 1 200 ₽</strong>.
      </p>
    </ProseSection>
    <PriceTableCard title="Прайс: ноги и руки" rows={LEGS_ROWS} />
    <ProseSection title="Результат" variant="gray">
      <p>
        Гладкость 3–5 недель. 24 часа без сауны и интенсивного спорта.{' '}
        <Link to="/depilyaciya/nogi-ruki/" className="text-gold font-semibold hover:opacity-80">
          Страница услуги →
        </Link>
      </p>
    </ProseSection>
    <BlogCta
      links={[
        { to: '/depilyaciya/nogi-ruki/', label: 'Ноги и руки →' },
        { to: '/blog/muzhskaya-depilyaciya-ekaterinburg/', label: 'Прайс Екб →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default DepilyaciyaNogRukMuzhchiny;
