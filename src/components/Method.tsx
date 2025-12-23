import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import methodImage from '@/assets/method-illustration.png';

const steps = [
  { number: '01', titleKey: 'method.steps.step1.title', descKey: 'method.steps.step1.description' },
  { number: '02', titleKey: 'method.steps.step2.title', descKey: 'method.steps.step2.description' },
  { number: '03', titleKey: 'method.steps.step3.title', descKey: 'method.steps.step3.description' },
  { number: '04', titleKey: 'method.steps.step4.title', descKey: 'method.steps.step4.description' },
];

export function Method() {
  const { t } = useTranslation();

  return (
    <section id="method" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src={methodImage}
              alt="Affordable AI bulk licensing visualization"
              className="w-full max-w-md rounded-2xl animate-float"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('method.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('method.subtitle')}
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 items-start group"
                >
                  <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">{t('method.cta')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
