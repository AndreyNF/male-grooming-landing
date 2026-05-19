import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const PRICE_ROWS = [
  { label: 'Окантовка бороды воском', price: '1000 ₽' },
  { label: 'Уши / Нос', price: '700 ₽' },
  { label: 'Подмышки', price: '1000 ₽' },
  { label: 'Руки до локтя', price: '2000 ₽' },
  { label: 'Руки полностью', price: '2500 ₽' },
  { label: 'Спина / Торс', price: '3000 ₽' },
  { label: 'Ноги полностью', price: '4000 ₽' },
  { label: 'Голени', price: '2000 ₽' },
  { label: 'Бикини. Классика', price: '2500 ₽' },
  { label: 'Бикини. Глубокое', price: '3000 ₽' },
];

const Voskom = () => {
  return (
    <PageLayout
      title="Восковая депиляция для мужчин в Екатеринбурге | Натали"
      description="Мужская восковая депиляция в Екатеринбурге. Воск, не шугаринг, не лазер. Стерильно, без боли. ул. Культуры 2. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/voskom/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Мужская восковая депиляция воском
          </h1>
          <p className="text-white/60 text-lg mb-8 tracking-wide">
            Екатеринбург, ул. Культуры 2&nbsp;|&nbsp;Только мужчины&nbsp;|&nbsp;с 2021 года
          </p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Записаться
            </Button>
          </a>
        </div>
      </section>

      {/* Текст — воск vs шугаринг */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-black mb-6 text-center">
            Восковая депиляция — не шугаринг и не лазер
          </h2>
          <p className="text-steel text-base leading-relaxed">
            Я работаю исключительно воском — это проверенный метод удаления волос, который
            отличается от шугаринга и лазерной эпиляции. Воск наносится в направлении роста
            волос и снимается резко — это обеспечивает качественное удаление даже коротких
            волосков. Для мужчин, привыкших к бритью, результат держится 4–6 недель: волосы
            отрастают мягче и реже. Шугаринг работает по другому принципу и подходит не всем
            типам кожи. Лазерная эпиляция — постоянная, требует много сеансов. Воск — быстро,
            чисто, без долгосрочных обязательств. Только мужчины, только стерильные расходники.
          </p>
        </div>
      </section>

      {/* Прайс */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Прайс восковой депиляции
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-8">
                <div className="space-y-3 text-steel">
                  {PRICE_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-center border-b border-gray-200 pb-2"
                    >
                      <span>{row.label}</span>
                      <span className="font-semibold text-gold">{row.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold text-gold mb-4">
            Записаться на восковую депиляцию
          </h2>
          <p className="text-white/70 text-base mb-8">
            Натали, ул. Культуры 2, каб. 115.3. Ежедневно 10:00–20:00.
          </p>
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
          <div>
            <Link
              to="/depilyaciya/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              ← Все зоны депиляции
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Voskom;
