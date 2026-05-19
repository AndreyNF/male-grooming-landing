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
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Две основные процедуры, которыми владею в совершенстве
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Scissors" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Мужская депиляция воском
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Удаляю нежелательные волосы качественным воском. 
                  Делаю это быстро и практически безболезненно. 
                  Эффект держится до 6 недель.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Стерильность на 100%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Комфорт во время процедуры</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Профессиональные материалы</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sun" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Моментальный загар
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Наношу профессиональный автозагар, который даёт естественный оттенок. 
                  Результат виден уже через 2-3 часа. Никакого вреда для кожи.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Равномерное нанесение</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Естественный цвет</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Держится 7-10 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gold/5 border border-gold/30 rounded-lg p-6 max-w-4xl mx-auto mt-8">
            <h2 className="text-xl font-heading font-bold text-black mb-3">
              Воск, не шугаринг и не лазер
            </h2>
            <p className="text-steel leading-relaxed">
              Я работаю только с воском — проверенной техникой удаления волос. Восковая депиляция отличается от шугаринга составом и способом нанесения. Для мужской кожи воск даёт чистый результат на 4–6 недель без раздражения. Я не делаю шугаринг и лазерную эпиляцию — только воск, только мужчины.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Мужской прайс
            </h2>
            <p className="text-lg text-steel">
              Честные цены на все процедуры
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Восковая депиляция
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span><span>Окантовка бороды воском</span></span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Уши / Нос</span>
                        <span className="font-semibold text-gold">700₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Подмышки</span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки до локтя</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки полностью</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Спина / Торс</span>
                        <span className="font-semibold text-gold">3000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Ноги полностью</span>
                        <span className="font-semibold text-gold">4000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Голени</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Мужская депиляция бикини
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Глубокое</span>
                        <span className="font-semibold text-gold">3000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Классика</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                    </div>
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
