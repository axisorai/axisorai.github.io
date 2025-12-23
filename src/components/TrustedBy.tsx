import { useTranslation } from '@/hooks/useTranslation';

const logos = [
  'TechCorp', 'Innovate', 'FutureAI', 'DataFlow', 'CloudSync',
  'SmartOps', 'NextGen', 'PrimeTech', 'Velocity', 'Quantum',
];

export function TrustedBy() {
  const { t } = useTranslation();

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          {t('trustedBy.title')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors font-semibold text-lg md:text-xl"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
