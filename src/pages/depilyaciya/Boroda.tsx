import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const Boroda = () => {
  return (
    <PageLayout
      title="Окантовка бороды воском в Екатеринбурге — 1000 ₽ | Натали"
      description="Окантовка бороды воском для мужчин. Цена 1000 ₽. Екатеринбург, ул. Культуры 2. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/boroda/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Окантовка бороды воском для мужчин
          </h1>
          <p className="text-white/60 text-lg mb-8 tracking-wide">
            1000 ₽&nbsp;|&nbsp;Екатеринбург, ул. Культуры 2
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

      {/* Описание процедуры */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-black mb-8 text-center">
            Как проходит окантовка бороды воском
          </h2>
          <div className="space-y-5 text-steel text-base leading-relaxed">
            <p>
              Окантовка бороды воском — это чёткие, ровные линии без раздражения после бритвы.
              Воск снимает пушок и короткие волоски там, где бритва даёт неровный результат:
              вдоль щёк, на шее и под подбородком.
            </p>
            <p>
              Процедура занимает 20–30 минут. Результат держится дольше, чем после бритья:
              кожа остаётся гладкой до 3–4 недель. Использую только профессиональный воск
              и одноразовые расходники.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            {[
              'Чёткие линии без раздражения',
              'Держится 3–4 недели',
              'Только одноразовые расходники',
              'Цена фиксированная — 1000 ₽',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Icon name="Check" size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-steel">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Card className="bg-gold/5 border border-gold/30">
              <CardContent className="p-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading font-semibold text-black text-lg">
                    Окантовка бороды воском
                  </p>
                  <p className="text-steel text-sm mt-1">Екатеринбург, ул. Культуры 2, каб. 115.3</p>
                </div>
                <span className="text-3xl font-heading font-bold text-gold shrink-0">
                  1000 ₽
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold text-gold mb-4">
            Записаться на окантовку бороды
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

export default Boroda;
