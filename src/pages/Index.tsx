import { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

const HERO_SRCSET =
  'https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/04e7212e-87b3-4db6-b439-dc1a428ad10f.avif 640w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/937b944a-3a13-48bd-83e5-90df068ce173.avif 960w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/5ce10a51-5abc-4660-93c7-30c2dc7bee14.avif 1280w, https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/091116c4-6343-491f-857c-d2be53fdd0a1.avif 1600w';
const HERO_SIZES = '(min-width: 1024px) 512px, (min-width: 416px) 384px, calc(100vw - 32px)';

const Index = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/avif';
    link.setAttribute('fetchpriority', 'high');
    link.setAttribute('imagesrcset', HERO_SRCSET);
    link.setAttribute('imagesizes', HERO_SIZES);
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  return (
    <PageLayout
      title="Натали — мужская депиляция воском и автозагар в Екатеринбурге | @sugar_TS"
      description="Мужская восковая депиляция и моментальный автозагар. Только мужчины, с 2021 года. ул. Культуры 2, каб. 115.3. Запись: Telegram @sugar_TS, 10:00–20:00."
      canonical="https://sugarts.ru/"
    >
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;