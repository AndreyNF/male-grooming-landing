import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const COMPARE_ROWS = [
  { criteria: 'Жёсткие/густые волосы', wax: 'Отлично', sugar: 'Хуже справляется' },
  { criteria: 'Чувствительная кожа', wax: 'Плёночный воск — деликатно', sugar: 'Хорошо' },
  { criteria: 'Скорость процедуры', wax: 'Быстрее на крупных зонах', sugar: 'Медленнее' },
  { criteria: 'Риск вросших волос', wax: 'Ниже при правильной технике', sugar: 'Выше на грубом покрове' },
  { criteria: 'Длительность результата', wax: '3–5 недель', sugar: '3–5 недель' },
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
            Честное сравнение двух методов — без маркетинга, только по делу.
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

          {/* Desktop таблица */}
          <div className="hidden sm:block overflow-x-auto">
            <div className="grid grid-cols-3 gap-px bg-gold/30 rounded-t-lg overflow-hidden mb-px">
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide">Критерий</div>
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide text-center">Воск</div>
              <div className="bg-black px-4 py-3 text-gold font-heading font-semibold text-sm uppercase tracking-wide text-center">Шугаринг</div>
            </div>
            <div className="rounded-b-lg overflow-hidden border border-gray-200 divide-y divide-gray-200">
              {COMPARE_ROWS.map((row, idx) => (
                <div key={row.criteria} className={`grid grid-cols-3 gap-px ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="px-4 py-3 text-black font-medium text-sm">{row.criteria}</div>
                  <div className="px-4 py-3 text-steel text-sm text-center flex items-center justify-center gap-1.5">
                    <Icon name="Check" size={14} className="text-gold shrink-0" />{row.wax}
                  </div>
                  <div className="px-4 py-3 text-steel text-sm text-center">{row.sugar}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile карточки */}
          <div className="sm:hidden space-y-3">
            {COMPARE_ROWS.map((row) => (
              <div key={row.criteria} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black px-4 py-2">
                  <p className="text-gold font-heading font-semibold text-sm">{row.criteria}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="px-3 py-3 bg-white">
                    <p className="text-xs text-gold font-semibold uppercase mb-1">Воск</p>
                    <div className="flex items-start gap-1.5">
                      <Icon name="Check" size={13} className="text-gold shrink-0 mt-0.5" />
                      <p className="text-steel text-sm leading-snug">{row.wax}</p>
                    </div>
                  </div>
                  <div className="px-3 py-3 bg-gray-50">
                    <p className="text-xs text-steel/60 font-semibold uppercase mb-1">Шугаринг</p>
                    <p className="text-steel text-sm leading-snug">{row.sugar}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Почему воск */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            Почему я выбираю воск для мужчин
          </h2>
          <p className="text-steel text-base leading-relaxed mb-4">
            Оба метода убирают волосы с корнем — в этом они похожи. Разница в том, как именно они это делают и для какого типа волос подходят лучше.
          </p>
          <p className="text-steel text-base leading-relaxed mb-4">
            Шугаринг — паста на основе сахара — наносится против роста волос и снимается по росту. Это снижает раздражение, но на грубых, жёстких волосах паста нередко соскальзывает или рвёт волос, не вытягивая его из фолликула. Следствие — вросшие волосы и повторные проходы по одному месту.
          </p>
          <p className="text-steel text-base leading-relaxed mb-4">
            Профессиональный воск прилипает к волосу плотнее. На мужской коже — особенно на спине, груди, бикини — это критично. Горячий воск размягчает кожу и позволяет вытянуть даже самые упрямые волоски за один раз.
          </p>
          <p className="text-steel text-base leading-relaxed">
            Для женщин шугаринг часто оптимален. Для мужчин — воск, как правило, даёт более чистый и предсказуемый результат.
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
          <p className="text-white/60 text-sm mb-6">Хотите попробовать — запишитесь на первую процедуру.</p>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              to="/blog/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Все статьи →
            </Link>
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
            <Link
              to="/depilyaciya/bikini/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Депиляция бикини для мужчин →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ShugaringVsVosk;