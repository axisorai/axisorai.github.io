import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most users are up and running within 24 hours. Our onboarding process is designed to get you productive immediately with pre-built templates and guided setup.',
  },
  {
    question: 'Do you offer team and enterprise support?',
    answer: 'Yes! Our Team Enablement package includes dedicated onboarding, policy frameworks, and live training sessions. Enterprise clients also get custom workflow development and priority support.',
  },
  {
    question: 'How do you handle data security?',
    answer: 'We use enterprise-grade encryption and comply with major regulations including GDPR and SOC 2. Your data is never used to train AI models, and you maintain full ownership of all outputs.',
  },
  {
    question: 'What does pricing look like?',
    answer: 'We offer flexible plans starting with Axiora Workspace for individuals. For teams and enterprises, contact us for custom pricing based on your needs. All plans include core features with no hidden fees.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Absolutely. Axiora Pro and Team Enablement plans include API access and custom integrations. We work with popular tools like Slack, Notion, Google Workspace, and more.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
