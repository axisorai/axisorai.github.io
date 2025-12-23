import { Shield, DollarSign, Scale } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const commitmentKeys = ['security', 'transparency', 'compliance'];

const icons = {
  security: Shield,
  transparency: DollarSign,
  compliance: Scale,
};

export function Commitment() {
  const { t } = useTranslation();

  return (
    <section id="commitment" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('commitment.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('commitment.subtitle')}
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {commitmentKeys.map((key) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <div
                key={key}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t(`commitment.items.${key}.title`)}</h3>
                <p className="text-muted-foreground">{t(`commitment.items.${key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
