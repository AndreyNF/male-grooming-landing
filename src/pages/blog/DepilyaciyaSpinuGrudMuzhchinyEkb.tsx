import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';

const BODY_ROWS = [
  { label: 'Грудь', price: '1 200 ₽' },
  { label: 'Живот', price: '800 ₽' },
  { label: 'Спина', price: '1 500 ₽' },
  { label: 'Ягодицы', price: '1 000 ₽' },
];

const DepilyaciyaSpinuGrudMuzhchinyEkb = () => (
  <PageLayout
    title="Депиляция спины и груди | Натали Екб"
    description="Спина 1 500 ₽, грудь 1 200 ₽. Воск для мужчин в Екатеринбурге. @sugar_TS"
    canonical="https://sugarts.ru/blog/depilyaciya-spinu-grud-muzhchiny-ekb/"
  >
    <BlogHero
      title="Депиляция спины и груди у мужчин"
      subtitle="Зал, футболка, вросшие после бритвы — зачем и сколько стоит в Екатеринбурге."
    />
    <ProseSection title="Зачем убирать волосы">
      <p>
        Эстетика, гигиена, меньше раздражения после станка. На грубых мужских волосах воск
        захватывает лучше шугаринга — особенно на спине.
      </p>
      <p>
        <Link to="/blog/shugaring-vs-vosk/" className="text-gold font-semibold hover:opacity-80">
          Воск vs шугаринг →
        </Link>
      </p>
    </ProseSection>
    <PriceTableCard title="Цены на тело" rows={BODY_ROWS} />
    <ProseSection title="Несколько зон за визит" variant="gray">
      <p>
        Можно совместить спину и грудь — напишите в Telegram, подскажу время и сумму.{' '}
        <Link to="/depilyaciya/voskom/" className="text-gold font-semibold hover:opacity-80">
          Полный прайс →
        </Link>
      </p>
    </ProseSection>
    <BlogCta
      links={[
        { to: '/depilyaciya/nogi-ruki/', label: 'Ноги и руки →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default DepilyaciyaSpinuGrudMuzhchinyEkb;
