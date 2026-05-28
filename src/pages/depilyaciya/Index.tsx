import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TELEGRAM_URL = 'https://t.me/sugar_TS';

const HUB_CARDS = [
  {
    title: 'Борода и окантовка',
    desc: 'Чёткая линия без бритвы — воском по контуру.',
    price: '1000 ₽',
    icon: 'Scissors',
    to: '/depilyaciya/boroda/',
  },
  {
    title: 'Зона бикини',
    desc: 'Классическое и глубокое бикини. Деликатно, профессионально.',
    price: 'от 2500 ₽',
    icon: 'Flame',
    to: '/depilyaciya/bikini/',
  },
  {
    title: 'Ноги, руки, спина',
    desc: 'Крупные зоны — быстро и эффективно.',
    price: 'от 2000 ₽',
    icon: 'Zap',
    to: '/depilyaciya/nogi-ruki/',
  },
  {
    title: 'Почему воск?',
    desc: 'Воск vs шугаринг — в чём разница и что лучше для мужчин.',
    price: 'все зоны',
    icon: 'Star',
    to: '/depilyaciya/voskom/',
  },
];

const DepilyaciyaIndex = () => {
  return (
    <PageLayout
      title="Мужская депиляция в Екатеринбурге — мастер для мужчин | Натали"
      description="Мужская депиляция воском в Екатеринбурге. Только мужчины, с 2021 года. Стерильно, комфортно. ул. Культуры 2, каб. 115.3. Запись @sugar_TS."
      canonical="https://sugarts.ru/depilyaciya/"
    >
      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
            Мужская депиляция — только для мужчин
          </h1>
          <p className="text-white/60 text-sm sm:text-base mb-8 tracking-wide">
            Работаю исключительно с мужчинами с 2021 года. Профессиональный воск, стерильный кабинет, без лишних вопросов.
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

      {/* Hub grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-black mb-4">
              Выбери зону депиляции
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {HUB_CARDS.map((card) => (
              <Link to={card.to} key={card.to} className="group">
                <Card className="bg-white border-l-4 border-l-gold shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                      <Icon name={card.icon} size={24} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-black text-base leading-snug group-hover:text-gold transition-colors">
                        {card.title}
                      </p>
                      <p className="text-steel text-sm mt-1">{card.desc}</p>
                    </div>
                    <Icon
                      name="ChevronRight"
                      size={18}
                      className="text-gold ml-auto shrink-0"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Почему воск */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-black mb-6 text-center">
            Воск — это выбор, а не компромисс
          </h2>
          <p className="text-steel text-base leading-relaxed text-center">
            Многие салоны предлагают мужчинам шугаринг — потому что это удобно для мастера. Но шугаринг создавался под более тонкие и мягкие волосы. На жёстком мужском покрове — особенно на спине, груди и в зоне бикини — воск работает точнее: захватывает волос с корнем, не рвёт его и меньше раздражает кожу при грамотном применении. Я работаю только воском — горячим и плёночным, в зависимости от зоны. Это даёт чистый результат даже там, где шугаринг пасует.
          </p>
          <div className="text-center mt-3">
            <Link to="/blog/shugaring-vs-vosk/" className="text-gold text-sm font-semibold hover:opacity-80 mt-3 inline-block">Читать подробное сравнение →</Link>
            <span className="text-steel text-sm mx-2">·</span>
            <Link to="/blog/" className="text-gold text-sm font-semibold hover:opacity-80 mt-3 inline-block">Все статьи →</Link>
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
          <div>
            <Link
              to="/zagar/"
              className="text-gold underline font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Также делаю моментальный автозагар →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DepilyaciyaIndex;
