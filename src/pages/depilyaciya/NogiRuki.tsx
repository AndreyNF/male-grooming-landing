import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const PRICE_ROWS = [
  { label: 'Ноги полностью', price: '4000 ₽' },
  { label: 'Голени', price: '2000 ₽' },
  { label: 'Руки полностью', price: '2500 ₽' },
  { label: 'Руки до локтя', price: '2000 ₽' },
  { label: 'Спина / Торс', price: '3000 ₽' },
  { label: 'Подмышки', price: '1000 ₽' },
];

const NogiRuki = () => {
  return (
    <PageLayout
      title="Депиляция ног и рук для мужчин — прайс | Екатеринбург"
      description="Мужская депиляция ног, рук и спины воском. Ноги 4000 ₽, голени 2000 ₽, руки от 2000 ₽, спина 3000 ₽. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/nogi-ruki/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Депиляция ног, рук и спины для мужчин
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            Екатеринбург, ул. Культуры 2&nbsp;|&nbsp;Воском&nbsp;|&nbsp;Только мужчины
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
              Прайс на депиляцию ног, рук и спины
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

      {/* CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
            Записаться на депиляцию
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Link
              to="/depilyaciya/bikini/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Депиляция бикини для мужчин →
            </Link>
            <Link
              to="/depilyaciya/boroda/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Окантовка бороды воском →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NogiRuki;
