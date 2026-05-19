import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const Kontakty = () => {
  return (
    <PageLayout
      title="Контакты — Натали, мужская депиляция и автозагар | Екатеринбург"
      description="Адрес: г. Екатеринбург, ул. Культуры, 2, каб. 115.3. Режим работы: ежедневно 10:00–20:00. Запись: Telegram @sugar_TS."
      canonical="https://sugarts.ru/kontakty/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Контакты
          </h1>
          <p className="text-sm sm:text-base text-white/60">
            Натали — мастер мужской депиляции воском и автозагара в Екатеринбурге
          </p>
        </div>
      </section>

      {/* Основная информация */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Адрес */}
            <Card className="border-l-4 border-l-gold shadow-md">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-black mb-1">Адрес</p>
                    <p className="text-steel text-sm leading-relaxed">
                      г. Екатеринбург<br />
                      ул. Культуры, 2<br />
                      кабинет 115.3
                    </p>
                    <p className="text-steel/60 text-xs mt-2">
                      Вход со стороны главного входа. Если не нашли — напишите, встречу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Режим работы */}
            <Card className="border-l-4 border-l-gold shadow-md">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-black mb-1">Режим работы</p>
                    <p className="text-steel text-sm">Ежедневно, 10:00–20:00</p>
                    <p className="text-steel/60 text-xs mt-2">
                      Без выходных. Запись подтверждается сразу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram */}
            <Card className="border-l-4 border-l-gold shadow-md">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Send" size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-black mb-1">Запись</p>
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-semibold text-sm hover:opacity-80 transition-opacity"
                    >
                      @sugar_TS в Telegram
                    </a>
                    <p className="text-steel/60 text-xs mt-2">
                      Отвечаю ежедневно с 10:00 до 20:00.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Парковка */}
            <Card className="border-l-4 border-l-gold shadow-md">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Car" size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-black mb-1">Парковка</p>
                    <p className="text-steel text-sm">Бесплатная открытая парковка рядом со зданием</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gold mb-3">
            Записаться на процедуру
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Напишите в Telegram — уточним зону, время и стоимость.
          </p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="block sm:inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/85 font-semibold px-8">
              <Icon name="Send" className="w-4 h-4 mr-2" />
              Написать @sugar_TS
            </Button>
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm">
            <Link to="/depilyaciya/" className="text-gold underline hover:opacity-80">
              Депиляция воском →
            </Link>
            <Link to="/zagar/" className="text-gold underline hover:opacity-80">
              Моментальный автозагар →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Kontakty;
