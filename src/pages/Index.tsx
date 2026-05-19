import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <PageLayout
      title="Натали — мужская депиляция воском и автозагар в Екатеринбурге | @sugar_TS"
      description="Мужская восковая депиляция и моментальный автозагар. Только мужчины, с 2021 года. ул. Культуры 2, каб. 115.3. Запись: Telegram @sugar_TS, 10:00–20:00."
      canonical="https://sugarts.ru/"
    >
      <HeroSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
