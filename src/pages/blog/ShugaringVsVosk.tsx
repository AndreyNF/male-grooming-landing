import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const COMPARE_ROWS = [
  {
    criteria: 'Состав',
    wax: 'Воск + смолы',
    sugar: 'Сахар + лимон',
  },
  {
    criteria: 'Техника',
    wax: 'Против роста',
    sugar: 'По росту',
  },
  {
    criteria: 'Боль',
    wax: 'Меньше при правильной технике',
    sugar: 'Зависит от мастера',
  },
  {
    criteria: 'Результат',
    wax: '4–6 недель',
    sugar: '3–5 недель',
  },
  {
    criteria: 'Для мужчин',
    wax: 'Отлично',
    sugar: 'Подходит не всем типам кожи',
  },
];

const ShugaringVsVosk = () => {
  return (
    <PageLayout
      title="Шугаринг или воск для мужчин — в чём разница | Натали"
      description="Шугаринг или восковая депиляция для мужчин — что выбрать? Разбираем разницу. Работаю воском в Екатеринбурге. Запись @sugar_TS."
      canonical="https://sugarts.ru/blog/shugaring-vs-vosk/"
    >
      {/* 1. Hero */}
      <section className="bg-black text-white py-10 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Мужской шугаринг и восковая депиляция: что выбрать
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8">
            Разбираем разницу — и почему я работаю воском
          </p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Записаться на депиляцию воском
            </Button>
          </a>
        </div>
      </section>

      {/* 2. Сравнительная таблица */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-10 text-center">
            Шугаринг vs воск: сравнение
          </h2>

          <div className="overflow-x-auto">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-px bg-gold/30 rounded-t-lg overflow-hidden mb-px min-w-[400px]">
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide">
                Критерий
              </div>
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide text-center">
                Воск
              </div>
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide text-center">
                Шугаринг
              </div>
            </div>

            {/* Data rows */}
            <div className="rounded-b-lg overflow-hidden border border-gray-200 divide-y divide-gray-200 min-w-[400px]">
              {COMPARE_ROWS.map((row, idx) => (
                <div
                  key={row.criteria}
                  className={`grid grid-cols-3 gap-px ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="px-4 py-3 text-black font-medium text-sm">
                    {row.criteria}
                  </div>
                  <div className="px-4 py-3 text-steel text-sm text-center flex items-center justify-center gap-1.5">
                    <Icon name="Check" size={14} className="text-gold shrink-0" />
                    {row.wax}
                  </div>
                  <div className="px-4 py-3 text-steel text-sm text-center">
                    {row.sugar}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Почему воск */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            Почему я делаю воск, а не шугаринг
          </h2>
          <p className="text-steel text-base leading-relaxed">
            Я специализируюсь на восковой депиляции для мужчин в Екатеринбурге с 2021 года — и
            это осознанный выбор. Воск удаляет волоски точнее: он захватывает даже короткие и
            тонкие волоски, которые шугаринг может пропустить. Для мужской кожи, которая толще
            и плотнее, воск даёт более чистый и стойкий результат — до 4–6 недель. Шугаринг
            работает по другому принципу и подходит не всем типам мужской кожи. Лазерная
            эпиляция — это совсем другая история: постоянная процедура, много сеансов, другой
            бюджет. Я не путаю эти методы. Только воск, только мужчины, только стерильные
            одноразовые расходники на каждого клиента.
          </p>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
            Записаться на восковую депиляцию воском
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/depilyaciya/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Все зоны депиляции →
            </Link>
            <Link
              to="/zagar/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Моментальный загар →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ShugaringVsVosk;
