import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import BlogCta from '@/components/blog/BlogCta';

const PervayaDepilyaciyaVoskomMuzhchiny = () => (
  <PageLayout
    title="Первая депиляция воском для мужчин | Натали Екб"
    description="Длина волос 5–8 мм, подготовка к визиту. Екатеринбург, ул. Культуры 2. Запись @sugar_TS."
    canonical="https://sugarts.ru/blog/pervaya-depilyaciya-voskom-muzhchiny/"
  >
    <BlogHero
      title="Первая восковая депиляция для мужчин"
      subtitle="Больно ли, как подготовиться и с какой зоны начать в Екатеринбурге."
      ctaLabel="Записаться на первую процедуру"
    />
    <ProseSection title="Больно ли">
      <p>
        Неприятно — да, невыносимо — нет. Профессиональный воск и техника снижают дискомфорт. Со
        второго визита большинству спокойнее.
      </p>
    </ProseSection>
    <ProseSection title="Подготовка" variant="gray">
      <p>
        <strong className="text-black">Волосы:</strong> 5–8 мм — не брить 10–14 дней до записи.
      </p>
      <p>
        <strong className="text-black">В день визита:</strong> без кремов и масел на зоне.
      </p>
      <p>
        <strong className="text-black">Противопоказания:</strong> варикоз в зоне, ожог, воспаление —
        уточните в Telegram заранее.
      </p>
    </ProseSection>
    <ProseSection title="С какой зоны начать">
      <p>
        Часто выбирают подмышки (700 ₽) или окантовку бороды (1 000 ₽). Полный прайс —{' '}
        <Link
          to="/blog/muzhskaya-depilyaciya-ekaterinburg/"
          className="text-gold font-semibold hover:opacity-80"
        >
          депиляция в Екатеринбурге
        </Link>
        .
      </p>
    </ProseSection>
    <BlogCta
      title="Записаться на первую процедуру"
      extra="Напишите, что это первый визит — подскажу подготовку."
      links={[
        { to: '/depilyaciya/voskom/', label: 'Прайс →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default PervayaDepilyaciyaVoskomMuzhchiny;
