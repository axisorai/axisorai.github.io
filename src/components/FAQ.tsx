import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from '@/hooks/useTranslation';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqKeys.map((key, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {t(`faq.items.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {t(`faq.items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
