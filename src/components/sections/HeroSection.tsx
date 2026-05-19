import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
