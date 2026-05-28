import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import BlogHero from '@/components/blog/BlogHero';
import ProseSection from '@/components/blog/ProseSection';
import PriceTableCard from '@/components/blog/PriceTableCard';
import BlogCta from '@/components/blog/BlogCta';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ZONES = [
  { title: 'Борода и окантовка', price: '1 000 ₽', to: '/depilyaciya/boroda/' },
  { title: 'Бикини', price: 'от 2 500 ₽', to: '/depilyaciya/bikini/' },
  { title: 'Спина, грудь, ноги', price: 'от 1 000 ₽', to: '/depilyaciya/nogi-ruki/' },
  { title: 'Полный прайс', price: 'все зоны', to: '/depilyaciya/voskom/' },
];

const MuzhskayaDepilyaciyaEkaterinburg = () => (
  <PageLayout
    title="Мужская депиляция в Екатеринбурге — цены | Натали"
    description="Восковая депиляция для мужчин в Екатеринбурге: прайс от 700 ₽, ул. Культуры 2. Запись @sugar_TS 10:00–20:00."
    canonical="https://sugarts.ru/blog/muzhskaya-depilyaciya-ekaterinburg/"
  >
    <BlogHero title="Мужская депиляция воском в Екатеринбурге" subtitle="Прайс, зоны и запись в личный кабинет на ул. Культуры — только мужчины, с 2021 года." />
    <ProseSection title="Почему отдельный кабинет для мужчин">
      <p>Работаю исключительно с мужчинами: грубый волосяной покров и комфорт на процедуре требуют отдельного подхода. Использую только профессиональный воск. <Link to="/blog/shugaring-vs-vosk/" className="text-gold font-semibold hover:opacity-80">Воск vs шугаринг →</Link></p>
    </ProseSection>
    <PriceTableCard />
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-black mb-8 text-center">Зоны депиляции</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {ZONES.map((z) => (
            <Link key={z.to} to={z.to} className="group">
              <Card className="border-l-4 border-l-gold shadow-md hover:shadow-xl h-full">
                <CardContent className="p-5 flex justify-between items-center">
                  <div>
                    <p className="font-heading font-semibold text-black group-hover:text-gold">{z.title}</p>
                    <p className="text-gold text-sm mt-1">{z.price}</p>
                  </div>
                  <Icon name="ChevronRight" className="text-gold" size={18} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <ProseSection title="Как записаться" variant="gray">
      <p>Telegram <a href="https://t.me/sugar_TS" className="text-gold font-semibold" target="_blank" rel="noopener noreferrer">@sugar_TS</a>. Адрес и парковка — <Link to="/depilyaciya/ekaterinburg/" className="text-gold font-semibold hover:opacity-80">на странице Екатеринбурга</Link>.</p>
    </ProseSection>
    <BlogCta title="Записаться на депиляцию в Екатеринбурге" />
  </PageLayout>
);
export default MuzhskayaDepilyaciyaEkaterinburg;
