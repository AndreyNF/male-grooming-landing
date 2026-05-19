import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PRICE_CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'face', label: 'Лицо' },
  { id: 'body', label: 'Тело' },
  { id: 'bikini', label: 'Бикини' },
  { id: 'legs', label: 'Ноги и руки' },
];

const PRICE_ITEMS = [
  { label: 'Борода / окантовка', price: '1 000 ₽', cat: 'face' },
  { label: 'Подмышки', price: '700 ₽', cat: 'body' },
  { label: 'Грудь', price: '1 200 ₽', cat: 'body' },
  { label: 'Живот', price: '800 ₽', cat: 'body' },
  { label: 'Спина', price: '1 500 ₽', cat: 'body' },
  { label: 'Ягодицы', price: '1 000 ₽', cat: 'body' },
  { label: 'Классическое бикини', price: '2 500 ₽', cat: 'bikini' },
  { label: 'Глубокое бикини', price: '3 000 ₽', cat: 'bikini' },
  { label: 'Руки (полностью)', price: '1 200 ₽', cat: 'legs' },
  { label: 'Ноги (полностью)', price: '2 000 ₽', cat: 'legs' },
  { label: 'Голень', price: '1 000 ₽', cat: 'legs' },
];

const ServicesSection = () => {
  const [activecat, setActivecat] = useState('all');
  const filtered = activecat === 'all' ? PRICE_ITEMS : PRICE_ITEMS.filter(i => i.cat === activecat);

  return (
    <>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Депиляция для мужчин — воском, не шугаринг
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Scissors" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Депиляция воском
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Удаление волос в любых зонах — от бороды до бикини. Результат держится до 4–6 недель. Только профессиональный воск, только одноразовые материалы.
                </p>
                <Link to="/depilyaciya/" className="text-gold text-sm font-semibold hover:opacity-80">Смотреть зоны и цены →</Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sun" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Моментальный автозагар
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Ровный загар без солнца и солярия — за один визит. Подбираю оттенок под ваш тон кожи. Результат виден сразу, держится до 10 дней.
                </p>
                <Link to="/zagar/" className="text-gold text-sm font-semibold hover:opacity-80">Подробнее об автозагаре →</Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gold/5 border border-gold/30 rounded-lg p-6 max-w-4xl mx-auto mt-8">
            <h2 className="text-xl font-heading font-bold text-black mb-3">
              Почему воск — и никак иначе
            </h2>
            <p className="text-steel leading-relaxed">
              Я работаю исключительно воском — и это осознанный выбор, а не ограничение.
            </p>
            <p className="text-steel leading-relaxed mt-3">
              Воск удаляет волос с корнем и захватывает даже короткие волоски от 3 мм. Он отлично работает на грубых мужских волосах — там, где шугаринг часто скользит или рвёт волос, а не вытягивает.
            </p>
            <p className="text-steel leading-relaxed mt-3">
              Шугаринг — хороший метод, но он создан под более тонкие и мягкие волосы. На спине, груди или в зоне бикини у мужчин он нередко даёт вросшие волосы и требует повторных проходов.
            </p>
            <p className="text-steel leading-relaxed mt-3">
              Лазер — это навсегда, дорого и требует курса из 6–8 сеансов. Если вы ещё не готовы к постоянному удалению — воск даёт отличный результат здесь и сейчас.
            </p>
            <Link to="/blog/shugaring-vs-vosk/" className="text-gold text-sm font-semibold hover:opacity-80 mt-3 inline-block">Подробнее о разнице между воском и шугарингом →</Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Прайс на депиляцию
            </h2>
          </div>

          {/* Фильтр */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {PRICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActivecat(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  activecat === cat.id
                    ? 'bg-black text-gold border-black'
                    : 'bg-white text-steel border-gray-200 hover:border-gold hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-5 sm:p-8">
                <div className="space-y-3 text-steel">
                  {filtered.map(item => (
                    <div key={item.label} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>{item.label}</span>
                      <span className="font-semibold text-gold shrink-0 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gold/10 rounded-lg p-5 text-center">
                    <h2 className="text-lg font-heading font-semibold text-black mb-1">
                      Моментальный загар в Екатеринбурге
                    </h2>
                    <p className="text-steel text-sm">Цена зависит от зоны покрытия. Обсуждаем индивидуально при записи.</p>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/zagar/" className="text-gold underline font-semibold text-sm">
                      Подробнее о моментальном загаре →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;