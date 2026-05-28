import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';

const BIKINI_ROWS = [
  { label: 'Бикини классика', price: '2 500 ₽' },
  { label: 'Бикини глубокое', price: '3 000 ₽' },
];

const MuzhskayaDepilyaciyaBikiniEkaterinburg = () => (
  <PageLayout
    title="Мужское бикини воском | Натали Екб"
    description="Классика 2 500 ₽, глубокое 3 000 ₽. Конфиденциально, только мужчины. @sugar_TS"
    canonical="https://sugarts.ru/blog/muzhskaya-depilyaciya-bikini-ekaterinburg/"
  >
    <BlogHero
      title="Мужская депиляция бикини"
      subtitle="Классика и глубокое — плёночный воск, кабинет только для мужчин."
    />
    <ProseSection title="Классика и глубокое">
      <p>
        <strong className="text-black">Классика</strong> — по линии белья.{' '}
        <strong className="text-black">Глубокое</strong> — шире, границы обсуждаем до процедуры.
        Обычно 40–60 минут.
      </p>
    </ProseSection>
    <PriceTableCard title="Цены на бикини" rows={BIKINI_ROWS} />
    <ProseSection title="Запись" variant="gray">
      <p>
        Telegram @sugar_TS — укажите тип бикини и время. Подготовка: волосы 5–8 мм, без кремов в
        день визита.{' '}
        <Link
          to="/blog/pervaya-depilyaciya-voskom-muzhchiny/"
          className="text-gold font-semibold hover:opacity-80"
        >
          Первый визит →
        </Link>
      </p>
    </ProseSection>
    <BlogCta
      links={[
        { to: '/depilyaciya/bikini/', label: 'Страница бикини →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default MuzhskayaDepilyaciyaBikiniEkaterinburg;
