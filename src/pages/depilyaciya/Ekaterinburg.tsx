import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const Ekaterinburg = () => {
  return (
    <PageLayout
      title="Депиляция для мужчин в Екатеринбурге — ул. Культуры 2 | Натали"
      description="Мужская депиляция воском в Екатеринбурге. Адрес: ул. Культуры 2, каб. 115.3. Только мужчины, с 2021 года. Запись: Telegram @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/ekaterinburg/"
    >
      {/* 1. Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Мужская депиляция в Екатеринбурге
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            ул. Культуры 2, каб. 115.3&nbsp;|&nbsp;Только мужчины&nbsp;|&nbsp;с 2021 года
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Записаться
            </Button>
          </a>
        </div>
      </section>

      {/* 2. Адрес и как добраться */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-8 text-center">
            Где находится
          </h2>
          <Card className="bg-white shadow-xl border-l-4 border-l-gold mb-6">
            <CardContent className="p-5 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="MapPin" size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-black text-base">Адрес</p>
                  <p className="text-steel text-sm mt-1 leading-relaxed">
                    Екатеринбург, ул. Культуры 2, кабинет 115.3, 2 этаж
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Clock" size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-black text-base">Режим работы</p>
                  <p className="text-steel text-sm mt-1">Ежедневно 10:00–20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Car" size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-black text-base">Парковка</p>
                  <p className="text-steel text-sm mt-1">Бесплатная парковка рядом с салоном</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-steel text-sm sm:text-base leading-relaxed text-center">
            Нахожусь в салоне красоты на ул. Культуры 2. Заходите на 2 этаж, кабинет 115.3.
            Рядом есть бесплатная парковка.
          </p>
        </div>
      </section>

      {/* 3. Что делаю */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-8 text-center">
            Услуги мужской депиляции в Екатеринбурге
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <Link to="/depilyaciya/voskom/" className="group">
              <Card className="bg-white border-l-4 border-l-gold shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-5 sm:p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Flame" size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-black text-base leading-snug group-hover:text-gold transition-colors">
                      Восковая депиляция
                    </p>
                    <p className="text-steel text-sm mt-1">Все зоны от 700 ₽</p>
                  </div>
                  <Icon name="ChevronRight" size={18} className="text-gold shrink-0" />
                </CardContent>
              </Card>
            </Link>
            <Link to="/zagar/" className="group">
              <Card className="bg-white border-l-4 border-l-gold shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-5 sm:p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Sun" size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-black text-base leading-snug group-hover:text-gold transition-colors">
                      Моментальный загар
                    </p>
                    <p className="text-steel text-sm mt-1">Индивидуальная цена</p>
                  </div>
                  <Icon name="ChevronRight" size={18} className="text-gold shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </div>
          <p className="text-steel text-sm sm:text-base leading-relaxed text-center">
            Работаю только с мужчинами. В Екатеринбурге делаю мужскую депиляцию воском
            с 2021 года — стерильно, комфортно, без боли.
          </p>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
            Записаться на депиляцию в Екатеринбурге
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed">
            Натали, ул. Культуры 2, каб. 115.3. Ежедневно 10:00–20:00.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block mb-6"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gold text-black hover:bg-gold/85 font-semibold px-10 py-3 text-lg"
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

export default Ekaterinburg;
