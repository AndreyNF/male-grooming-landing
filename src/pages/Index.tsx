import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 min-h-screen bg-background">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex container mx-auto px-4 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-gold">
                "Я — Натали, мастер депиляции с 2021 года"
              </h1>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-steel/30">
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  Работаю исключительно с мужчинами. 
                  Гарантирую безболезненные процедуры и идеальный результат. 
                  Создаю атмосферу комфорта для каждого клиента.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">Записаться </Button>
                </a>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Екатеринбург
                </Button>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-steel/30 to-gold/20 rounded-full blur-3xl opacity-30 -z-10 scale-110"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-steel/40">
                  <img 
                    src="https://cdn.poehali.dev/files/1e345896-784d-4147-a1c0-6145871dfccb.jpg" 
                    alt="Натали - мастер депиляции для мужчин" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden container mx-auto px-4 min-h-screen flex flex-col justify-center">
          <div className="space-y-8">
            <div className="relative w-full max-w-sm mx-auto mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-steel/40">
                <img 
                  src="https://cdn.poehali.dev/files/1e345896-784d-4147-a1c0-6145871dfccb.jpg" 
                  alt="Натали - мастер депиляции для мужчин" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-6">
              <p className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-gold">
                "Я — Натали, мастер депиляции с 2021 года"
              </p>
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Работаю исключительно с мужчинами. 
                  Гарантирую безболезненные процедуры и идеальный результат. 
                  Создаю атмосферу комфорта для каждого клиента.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                  <Button size="lg" className="w-full bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">Записаться </Button>
                </a>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Екатеринбург
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Что я делаю
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Две основные процедуры, которыми владею в совершенстве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Scissors" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Мужская депиляция воском
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Удаляю нежелательные волосы качественным воском. 
                  Делаю это быстро и практически безболезненно. 
                  Эффект держится до 6 недель.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Стерильность на 100%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Комфорт во время процедуры</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Профессиональные материалы</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sun" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Моментальный загар
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Наношу профессиональный автозагар, который даёт естественный оттенок. 
                  Результат виден уже через 2-3 часа. Никакого вреда для кожи.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Равномерное нанесение</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Естественный цвет</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Держится 7-10 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Мужской прайс
            </h2>
            <p className="text-lg text-steel">
              Честные цены на все процедуры
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Восковая депиляция
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Окантовка бороды</span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Уши / Нос</span>
                        <span className="font-semibold text-gold">700₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Подмышки</span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки до локтя</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки полностью</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Спина / Торс</span>
                        <span className="font-semibold text-gold">3000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Ноги полностью</span>
                        <span className="font-semibold text-gold">4000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Голени</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Интимная зона
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Глубокое</span>
                        <span className="font-semibold text-gold">3000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Классика</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-black mb-2">Моментальный загар</h4>
                    <p className="text-steel">Цена зависит от зоны покрытия. Обсуждаем индивидуально при записи.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Contact Section */}
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


          
          {/* FAQ Section */}
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
    </div>
  );
};

export default Index;