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
            Как меня найти
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-steel/20 border border-gold/30 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gold">
                Режим работы
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="Send" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telegram @sugar_TS</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Работаю</p>
                    <p className="text-gray-300">Ежедневно, 10:00–20:00</p>
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
                    <p className="font-semibold text-white">Адрес</p>
                    <p className="text-gray-300">г. Екатеринбург, ул. Культуры, 2, кабинет 115.3</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Icon name="Car" size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Парковка</p>
                    <p className="text-gray-300">Есть открытая парковка рядом со зданием</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section - dark */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">Ещё вопросы — отвечаю честно</h2>
          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="item-1" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Почему именно воск, а не шугаринг?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Воск лучше работает на жёстких и густых мужских волосах, особенно в сложных зонах — спина, грудь, бикини. Шугаринг чаще даёт вросшие волосы на грубом покрове.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Можно ли делать депиляцию в интимной зоне?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да, это обычная рабочая зона. Подхожу профессионально, без лишних комментариев. Конфиденциальность гарантирована.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Я первый раз — что меня ждёт?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Сначала кратко обсудим зоны и ожидания. Объясню, как пройдёт процедура. Никакого осуждения, никакой спешки — только работа.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как долго длится процедура?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Зависит от зон. Борода — 20–30 минут, бикини — 40–60 минут, несколько зон сразу — от 1 до 1,5 часов.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Могу ли я прийти с другом / партнёром?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Принимаю по одному — кабинет рассчитан на одного клиента. Записать друга можно сразу следующим слотом.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Бывают ли акции или скидки?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Информацию об акциях публикую в Telegram-канале. Подпишитесь, чтобы не пропустить.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Что делать после процедуры?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                В течение 24 часов — не посещать сауну, бассейн, солярий, не тереть кожу мочалкой. На 3–5 день начните использовать скраб — это предотвращает вросшие волосы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Можно ли совместить депиляцию и автозагар в один визит?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Нет. Автозагар наносится только на чистую кожу без свежего раздражения. Лучше сделать депиляцию и вернуться через 48 часов — результат будет идеальным.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                У меня очень густые / жёсткие волосы. Поможет ли воск?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да, именно для таких волос воск и создан. Горячий воск особенно эффективен на плотном покрове.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Есть ли парковка рядом?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да, рядом с ул. Культуры, 2 есть открытая парковка.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11" className="bg-card/10 border border-gold/20 rounded-lg px-6">
              <AccordionTrigger className="text-white font-medium hover:text-gold">
                Как вы соблюдаете стерильность?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Одноразовые расходники, перчатки на каждого клиента, обработка поверхностей между визитами. Рабочее место готовится заново к каждой записи.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
              Остались вопросы?
            </h3>
            <p className="text-gray-300 mb-6">
              Проще спросить напрямую — отвечаю честно и без лишних слов.
            </p>
            <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">Написать в Telegram @sugar_TS</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
