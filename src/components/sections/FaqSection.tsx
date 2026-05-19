import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    <>
      {/* FAQ Section - white */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Частые вопросы
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pain" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Больно ли делать депиляцию воском?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Неприятно — да, терпимо — да. Мужская кожа грубее, но профессиональный воск и правильная техника снижают болезненность до минимума. Большинство клиентов отмечают, что уже со второго раза воспринимают процедуру спокойно.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="result" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как долго держится результат?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  В среднем 3–5 недель. Зависит от зоны и индивидуального цикла роста волос. Со временем волосы становятся тоньше и реже — это нормальная реакция на регулярную депиляцию.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="length" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Какой должна быть длина волос перед процедурой?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Оптимально — от 5 до 8 мм. Не нужно специально отращивать долго: просто прекратите бриться за 10–14 дней до визита.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="prep" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Нужна ли подготовка?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  В день процедуры не наносите кремы и масла на обрабатываемые зоны. В остальном — никакой специальной подготовки не требуется.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="menonly" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Вы работаете только с мужчинами?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Да. Я специализируюсь исключительно на мужской депиляции с 2021 года. Это не случайность — мужская кожа, волосяной покров и психологический комфорт клиента требуют отдельного подхода.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="materials" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Какие материалы используются?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Только профессиональный воск (плёночный и горячий) и одноразовые расходные материалы. После процедуры наношу успокаивающее средство.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="contraind" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Есть ли противопоказания?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Да: варикоз в зоне обработки, открытые повреждения кожи, активные воспаления, солнечный ожог. Если есть сомнения — уточните заранее в Telegram.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="booking" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как записаться?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Через Telegram: @sugar_TS. Отвечаю ежедневно с 10:00 до 20:00. Запись подтверждается сразу.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
