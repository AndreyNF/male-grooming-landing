import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const PRICE_ROWS = [
  { label: 'Борода / окантовка', price: '1 000 ₽' },
  { label: 'Подмышки', price: '700 ₽' },
  { label: 'Грудь', price: '1 200 ₽' },
  { label: 'Живот', price: '800 ₽' },
  { label: 'Спина', price: '1 500 ₽' },
  { label: 'Ягодицы', price: '1 000 ₽' },
  { label: 'Классическое бикини', price: '2 500 ₽' },
  { label: 'Глубокое бикини', price: '3 000 ₽' },
  { label: 'Руки (полностью)', price: '1 200 ₽' },
  { label: 'Ноги (полностью)', price: '2 000 ₽' },
  { label: 'Голень', price: '1 000 ₽' },
];

const Voskom = () => {
  return (
    <PageLayout
      title="Восковая депиляция для мужчин в Екатеринбурге | Натали"
      description="Мужская восковая депиляция в Екатеринбурге. Воск, не шугаринг, не лазер. Стерильно, без боли. ул. Культуры 2. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/voskom/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Мужская восковая депиляция воском
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            Почему профессиональный воск — лучший выбор для мужчин. Без компромиссов.
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            Восковая депиляция — не шугаринг и не лазер
          </h2>
          <p className="text-steel text-base leading-relaxed mb-4">
            Воск и шугаринг часто считают взаимозаменяемыми — но это не так, особенно для мужской кожи.
          </p>
          <p className="text-steel text-base leading-relaxed mb-4">
            Мужские волосы жёстче и толще женских. Шугаринг в таких условиях нередко скользит, не захватывает волос полностью или рвёт его у основания — отсюда вросшие волосы и раздражение. Горячий воск проникает глубже в фолликул и вытягивает волос целиком.
          </p>
          <p className="text-steel text-base leading-relaxed mb-4">
            На крупных зонах — спина, грудь, ноги — воск работает быстрее и аккуратнее. На деликатных зонах, вроде бикини, плёночный воск минимизирует дискомфорт.
          </p>
          <p className="text-steel text-base leading-relaxed">
            Я не использую шугаринг — не потому что он плохой, а потому что воск лучше подходит для задач, с которыми приходят мои клиенты.
          </p>
        </div>
      </section>

      {/* Прайс */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
              Цены на восковую депиляцию
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-4 sm:p-8">
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
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
