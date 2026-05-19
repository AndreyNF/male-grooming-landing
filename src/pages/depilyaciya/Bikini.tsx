import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const PRICE_ROWS = [
  { label: 'Бикини классика', price: '2500 ₽' },
  { label: 'Бикини глубокое', price: '3000 ₽' },
];

const Bikini = () => {
  return (
    <PageLayout
      title="Мужская депиляция бикини в Екатеринбурге — цены | Натали"
      description="Мужская депиляция бикини воском. Классика 2500 ₽, глубокое 3000 ₽. Только мужчины, стерильно. ул. Культуры 2. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/bikini/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Депиляция бикини для мужчин
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            Деликатная зона — профессиональный подход. Без осуждения, без неловкости.
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

      {/* Прайс */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
              Цены на мужскую депиляцию бикини
            </h2>
          </div>
          <div className="max-w-md mx-auto">
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

      {/* Как проходит */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            Что вас ждёт на процедуре
          </h2>
          <div className="space-y-4 text-steel text-base leading-relaxed">
            <p>
              Перед началом кратко обсуждаем зону и желаемый результат. Работаю профессиональным плёночным воском — он особенно деликатен на чувствительных участках. Процедура занимает от 40 до 60 минут в зависимости от объёма работы.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            {[
              'Конфиденциально — личный кабинет, только вы и мастер',
              'Безопасно — одноразовые материалы, обработка поверхностей',
              'Без осуждения — это обычная процедура, я видела всякое',
              'Долгий результат — гладко 3–5 недель, волосы становятся тоньше с каждым разом',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Icon name="Check" size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-steel">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
            Записаться на депиляцию бикини
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
          <p className="text-white/60 text-sm mt-4">Есть вопросы? Напишите — отвечу честно и без лишних слов.</p>
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

export default Bikini;
