import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';

const BORODA_ROWS = [{ label: 'Борода / окантовка', price: '1 000 ₽' }];

const OkantovkaBorodyVoskomEkaterinburg = () => (
  <PageLayout
    title="Окантовка бороды воском | Натали Екб"
    description="Окантовка бороды 1 000 ₽. Екатеринбург, ул. Культуры 2. @sugar_TS"
    canonical="https://sugarts.ru/blog/okantovka-borody-voskom-ekaterinburg/"
  >
    <BlogHero
      title="Окантовка бороды воском в Екатеринбурге"
      subtitle="Чёткий контур щёк и шеи — 1 000 ₽, результат 3–5 недель."
    />
    <ProseSection title="Что входит">
      <p>
        Убираем волосы по контуру бороды — щёки, шея, линия скулов. Поле бороды остаётся. Волос
        удаляется с корнем, не срезается как бритвой.
      </p>
    </ProseSection>
    <PriceTableCard title="Цена" rows={BORODA_ROWS} />
    <ProseSection title="Уход" variant="gray">
      <p>
        Сутки без скрабов и спиртовых лосьонов. После воска наношу успокаивающее средство.{' '}
        <Link to="/depilyaciya/boroda/" className="text-gold font-semibold hover:opacity-80">
          Страница услуги →
        </Link>
      </p>
    </ProseSection>
    <BlogCta
      title="Записаться на окантовку"
      links={[
        { to: '/depilyaciya/boroda/', label: 'Борода →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default OkantovkaBorodyVoskomEkaterinburg;
