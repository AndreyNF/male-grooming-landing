import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';

const VoskIliLazerMuzhchiny = () => (
  <PageLayout
    title="Воск или лазер для мужчин | Натали Екб"
    description="Лазер — курс; воск — от 700 ₽ с первого визита. Мужская депиляция, ул. Культуры 2."
    canonical="https://sugarts.ru/blog/vosk-ili-lazer-muzhchiny/"
  >
    <BlogHero
      title="Воск или лазер для мужчин"
      subtitle="Сравнение без «лазер всегда лучше» — под мужскую кожу в Екатеринбурге."
    />
    <ProseSection title="Кратко">
      <p>
        <strong className="text-black">Лазер</strong> — курс 6–8 сеансов, дороже на старте, слабо
        берёт светлые волосы. <strong className="text-black">Воск</strong> — гладкость 3–5 недель с
        первого визита, от 700 ₽ за зону.
      </p>
      <p>
        Про шугаринг:{' '}
        <Link to="/blog/shugaring-vs-vosk/" className="text-gold font-semibold hover:opacity-80">
          воск vs шугаринг →
        </Link>
      </p>
    </ProseSection>
    <PriceTableCard title="Цены на воск в Екатеринбурге" />
    <BlogCta
      links={[
        { to: '/depilyaciya/voskom/', label: 'Все зоны →' },
        { to: '/blog/pervaya-depilyaciya-voskom-muzhchiny/', label: 'Первый визит →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default VoskIliLazerMuzhchiny;
