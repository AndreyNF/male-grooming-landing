import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import BlogCta from '@/components/blog/BlogCta';
import { Card, CardContent } from '@/components/ui/card';

const STEPS = [
  { n: '1', title: 'Подготовка', text: 'Пилинг и выбор оттенка под ваш тон.' },
  { n: '2', title: 'Нанесение', text: 'Ровный слой без полос и пятен.' },
  { n: '3', title: 'Результат', text: 'Проявление 2–3 часа, держится 7–10 дней.' },
];

const AvtozagarMuzhchinyEkaterinburg = () => (
  <PageLayout
    title="Автозагар для мужчин | Натали Екб"
    description="Моментальный автозагар в Екатеринбурге. ул. Культуры 2. Цена при записи в @sugar_TS"
    canonical="https://sugarts.ru/blog/avtozagar-muzhchiny-ekaterinburg/"
  >
    <BlogHero
      title="Автозагар для мужчин в Екатеринбурге"
      subtitle="Ровный загар без солнца — в кабинете на ул. Культуры."
      ctaLabel="Записаться на автозагар"
    />
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid sm:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <Card key={s.n} className="border-l-4 border-l-gold">
              <CardContent className="p-6 text-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-bold">{s.n}</span>
                </div>
                <p className="font-heading font-semibold text-black mb-2">{s.title}</p>
                <p className="text-steel text-sm">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <ProseSection title="Цена" variant="gray">
      <p>
        Зависит от площади покрытия — озвучу в Telegram при записи. Работаю с мужчинами с 2021 года,
        оттенок естественный, без «оранжевого» эффекта.
      </p>
    </ProseSection>
    <ProseSection title="С депиляцией">
      <p>
        Можно совместить визиты — порядок согласуем заранее.{' '}
        <Link to="/zagar/" className="text-gold font-semibold hover:opacity-80">
          Подробнее об автозагаре →
        </Link>
        . Депиляция —{' '}
        <Link to="/depilyaciya/" className="text-gold font-semibold hover:opacity-80">
          зоны и цены →
        </Link>
        .
      </p>
    </ProseSection>
    <BlogCta
      title="Записаться на автозагар"
      links={[
        { to: '/zagar/', label: 'Автозагар →' },
        { to: '/depilyaciya/ekaterinburg/', label: 'Адрес →' },
        { to: '/blog/', label: 'Статьи →' },
      ]}
    />
  </PageLayout>
);

export default AvtozagarMuzhchinyEkaterinburg;
