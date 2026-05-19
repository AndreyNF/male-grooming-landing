import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    <>
      {/* FAQ Section - white */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Отвечаю на вопросы
            </h2>
            <p className="text-lg text-steel">
              То, что обычно интересует моих клиентов
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pain" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Болезненна ли восковая депиляция?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  У меня процедура проходит практически безболезненно. Я использую качественный воск 
                  и работаю быстро. Большинство клиентов удивляются, что всё оказалось намного легче, 
                  чем они ожидали. Многие засыпают во время процедуры.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="duration" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Сколько времени занимает процедура?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Депиляция воском — 30-60 минут в зависимости от зоны. Автозагар наношу за 15-20 минут. 
                  Работаю качественно, но не тороплюсь. Важен результат, а не скорость.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tan-process" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как проходит процедура моментального загара?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Наношу профессиональное средство равномерными движениями по всему телу. 
                  Использую только сертифицированную косметику. Через 2-3 часа у вас уже красивый 
                  естественный оттенок. Процедура абсолютно безопасна для кожи.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tan-duration" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как долго держится автозагар?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Моментальный загар держится 7-10 дней, постепенно светлея. Всё зависит от типа кожи 
                  и ухода. Рекомендую использовать увлажняющие средства для продления эффекта. 
                  Повторную процедуру можно делать через неделю.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hygiene" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как вы соблюдаете гигиену во время процедур?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Строго соблюдаю все санитарные нормы. Использую одноразовые расходники, 
                  стерилизую инструменты в сухожаровом шкафу. Руки обрабатываю антисептиком 
                  перед каждым клиентом. Кабинет ежедневно дезинфицируется УФ-лампой.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="preparation" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как подготовиться к процедуре?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Для депиляции: волоски должны быть 5-7 мм, за день до процедуры желательно сделать скраб. 
                  Для загара: кожа должна быть чистой, без кремов и дезодорантов. 
                  Все подробности расскажу при записи.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="result" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как долго держится результат депиляции?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Депиляция воском — 4-6 недель. При регулярных процедурах волосы становятся тоньше 
                  и растут медленнее, а промежутки между сеансами увеличиваются.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="comfort" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Комфортно ли мужчинам у женщины-мастера?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Я работаю только с мужчинами уже 3 года. Создаю максимально комфортную атмосферу — 
                  никакого смущения или неловкости. Подхожу профессионально и деликатно. 
                  95% клиентов становятся постоянными.
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
