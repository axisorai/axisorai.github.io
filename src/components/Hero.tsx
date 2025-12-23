import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import heroImage from '@/assets/hero-abstract.png';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(262,40%,15%)_0%,_hsl(222,47%,8%)_70%)]" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#products">{t('hero.ctaPrimary')}</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">{t('hero.ctaSecondary')}</a>
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground/60 mt-6 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {t('hero.disclaimer')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:flex justify-center animate-float">
            <img
              src={heroImage}
              alt="Abstract AI visualization"
              className="w-full max-w-lg xl:max-w-xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
