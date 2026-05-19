import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Связаться со мной
          </h2>
          <p className="text-lg text-gray-300">
            Записывайтесь и задавайте вопросы
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-steel/20 border border-gold/30 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gold">
                Режим работы
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="">
                  </div>
                  <div>
                    <p className="font-semibold text-white"></p>
                    <p className="text-gray-300"></p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Работаю</p>
                    <p className="text-gray-300">Каждый день: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-steel/20 border border-gold/30 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gold">
                Где меня найти
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Салон красоты</p>
                    <p className="text-gray-300">Екатеринбург, ул. Культуры 2, кабинет 115.3, 2 этаж</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="Car" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Парковка</p>
                    <p className="text-gray-300">Бесплатная, рядом с салоном</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section - dark */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">Частые вопросы</h2>
          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="item-1" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Болезненна ли восковая депиляция для мужчин?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Дискомфорт зависит от зоны и чувствительности кожи. Использую качественный воск и отработанную технику, чтобы процедура проходила максимально комфортно. Большинство клиентов переносят депиляцию спокойно, без сильной боли.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Сколько времени занимает восковая депиляция?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                От 15 до 60 минут в зависимости от зоны: окантовка бороды или уши — быстрее, ноги полностью или спина — дольше. Точное время скажу при записи.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как проходит моментальный автозагар?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Подбираю оттенок под ваш тон кожи, равномерно наношу профессиональный автозагар. Первый результат виден через 2–3 часа, окончательный оттенок формируется в течение суток.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как долго держится автозагар?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Обычно 7–10 дней при правильном уходе: не трите кожу мочалкой, увлажняйте, избегайте длительных горячих ванн в первые сутки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как соблюдается гигиена во время процедур?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Работаю со стерильными одноразовыми расходниками, дезинфицирую кожу и инструменты, использую профессиональные материалы. Для каждого клиента — чистые принадлежности и подготовленное рабочее место.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как подготовиться к депиляции воском?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Волосы в зоне процедуры — около 5–7 мм (примерно две недели роста). За сутки не загорайте и не наносите крем на зону депиляции. При раздражении или воспалении на коже лучше перенести визит.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как долго держится результат депиляции воском?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                В среднем 3–6 недель. Волосы отрастают мягче и реже, чем после бритья. Срок зависит от особенностей кожи и зоны.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Комфортно ли мужчинам у женщины-мастера?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да. Работаю только с мужчинами, всё проходит профессионально и уважительно, без лишних вопросов.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Вы оказываете интимные услуги?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Нет. Я мастер депиляции и автозагара: восковая депиляция (включая бикини) и моментальный загар — только косметологические процедуры.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Больно ли делать депиляцию воском?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Ощущения индивидуальны, но при правильной технике процедура переносится легче, чем многие ожидают. При необходимости делаю паузы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как записаться на процедуру?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Напишите в Telegram @sugar_TS: укажите услугу и удобное время. Подтвержу запись и отвечу на вопросы до визита.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
              Готовы попробовать?
            </h3>
            <p className="text-gray-300 mb-6">
              Запишитесь на первую процедуру. Гарантирую — вы останетесь довольны результатом. 
              Если что-то не понравится — верну деньги.
            </p>
            <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">Написать </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
