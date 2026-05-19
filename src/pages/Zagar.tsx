import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const Zagar = () => {
  return (
    <PageLayout
      title="Моментальный загар в Екатеринбурге для мужчин | Натали @sugar_TS"
      description="Профессиональный автозагар в салоне. Естественный оттенок за 2–3 часа, держится 7–10 дней. Екатеринбург, ул. Культуры 2. Запись @sugar_TS."
      canonical="https://sugarts.ru/zagar/"
    >
      {/* 1. Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Моментальный автозагар в Екатеринбурге
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            Ровный натуральный загар без солнца и солярия — за один визит. Подбираю оттенок под ваш тон кожи.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center sm:inline-block mb-10"
          >
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Записаться в Telegram @sugar_TS
            </Button>
          </a>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
            Профессиональный автозагар в Екатеринбурге — естественный оттенок за 2–3 часа.
            Работаю с мужчинами с 2021 года. Сделать моментальный загар можно ежедневно, без предоплаты.
          </p>
        </div>
      </section>

      {/* 2. Как это работает */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
              Три шага до результата
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border-l-4 border-l-gold shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={24} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-black text-lg mb-2">
                  Подбор оттенка
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  Оцениваю ваш естественный тон кожи и обсуждаем желаемый результат — лёгкий загар или выраженный тёмный тон. Никакой самодеятельности: оттенок подбирается индивидуально.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-gold shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={24} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-black text-lg mb-2">
                  Нанесение
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  Состав наносится профессиональным пульверизатором равномерно по всему телу. Занимает 15–20 минут. Результат виден уже в процессе.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-gold shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sun" size={24} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-black text-lg mb-2">
                  Результат
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  Загар проявляется в течение 4–8 часов и держится до 7–10 дней. Со временем смывается равномерно — без пятен, если соблюдать уход.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Цены */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
              Стоимость
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-5 sm:p-8 text-center">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="BadgePercent" size={28} className="text-gold" />
                </div>
                <p className="text-steel text-base leading-relaxed mb-6">
                  Цена зависит от зоны покрытия и обсуждается индивидуально при записи.
                  Свяжитесь в Telegram — отвечу быстро и согласую удобное время.
                </p>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gold text-black hover:bg-gold/85 font-semibold px-8"
                  >
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Узнать цену в Telegram @sugar_TS
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Уход после загара */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-8 text-center">
            Как ухаживать за загаром
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-gold mt-0.5 shrink-0" />
              <span className="text-steel leading-relaxed">
                Первые 8 часов — не мочить кожу, не потеть, избегать тесной одежды. Дайте составу зафиксироваться.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-gold mt-0.5 shrink-0" />
              <span className="text-steel leading-relaxed">
                Первый душ — тёплая вода без мочалки и агрессивных гелей. Лёгкими движениями, без растирания.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-gold mt-0.5 shrink-0" />
              <span className="text-steel leading-relaxed">
                Увлажнение — наносите лосьон для тела ежедневно. Это продлевает ровность загара и замедляет его смывание.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-gold mt-0.5 shrink-0" />
              <span className="text-steel leading-relaxed">
                Скраб — не раньше 5-го дня — когда захотите смыть загар равномерно, используйте мягкий скраб. Не раньше, иначе загар сойдёт пятнами.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-10 text-center">
            Частые вопросы об автозагаре
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q0">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Буду ли я выглядеть «оранжевым»?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Нет. Современные составы дают натуральный золотистый или бронзовый оттенок. Цвет подбирается под ваш тип кожи — результат выглядит как настоящий загар.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q1">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Как долго держится автозагар?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Обычно 7–10 дней при правильном уходе: не трите кожу мочалкой, увлажняйте,
                избегайте длительных горячих ванн в первые сутки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Как проходит моментальный автозагар?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Подбираю оттенок под ваш тон кожи, равномерно наношу профессиональный автозагар.
                Первый результат виден через 2–3 часа, окончательный оттенок формируется в течение суток.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Как подготовиться к автозагару?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Кожа должна быть чистой, без кремов и дезодорантов. Желательно сделать скраб
                за день до процедуры.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-combo">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Подходит ли автозагар после депиляции?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Не сразу. После депиляции подождите 48 часов — кожа должна успокоиться. Тогда загар ляжет ровно и продержится дольше.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className="text-left font-heading font-semibold text-black hover:no-underline hover:text-gold transition-colors">
                Как записаться на автозагар в Екатеринбурге?
              </AccordionTrigger>
              <AccordionContent className="text-steel leading-relaxed">
                Напишите в Telegram{' '}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline font-semibold"
                >
                  @sugar_TS
                </a>
                : укажите услугу и удобное время. Подтвержу запись и отвечу на вопросы до визита.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gold mb-4">
            Записаться на автозагар в Екатеринбурге
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            Натали, ул. Культуры 2, каб. 115.3. Ежедневно 10:00–20:00.
          </p>
          <p className="text-white/60 text-sm mb-4">Хотите подготовиться к отпуску или событию — запишитесь заранее.</p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center sm:inline-block mb-6"
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
              Также делаю мужскую депиляцию воском →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Zagar;
