import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Прайс на депиляцию
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-8">
                <div className="space-y-3 text-steel">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Борода / окантовка</span>
                    <span className="font-semibold text-gold">1 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Подмышки</span>
                    <span className="font-semibold text-gold">700 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Грудь</span>
                    <span className="font-semibold text-gold">1 200 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Живот</span>
                    <span className="font-semibold text-gold">800 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Спина</span>
                    <span className="font-semibold text-gold">1 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Ягодицы</span>
                    <span className="font-semibold text-gold">1 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Классическое бикини</span>
                    <span className="font-semibold text-gold">2 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Глубокое бикини</span>
                    <span className="font-semibold text-gold">3 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Руки (полностью)</span>
                    <span className="font-semibold text-gold">1 200 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Ноги (полностью)</span>
                    <span className="font-semibold text-gold">2 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Голень</span>
                    <span className="font-semibold text-gold">1 000 ₽</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h2 className="text-xl font-heading font-semibold text-black mb-2">
                      Моментальный загар в Екатеринбурге
                    </h2>
                    <p className="text-steel">Цена зависит от зоны покрытия. Обсуждаем индивидуально при записи.</p>
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/zagar/" className="text-gold underline font-semibold">
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
