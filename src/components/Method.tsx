import { Button } from '@/components/ui/button';
import methodImage from '@/assets/method-illustration.png';

const steps = [
  { number: '01', title: 'Setup', description: 'Quick onboarding and tool configuration tailored to your workflow.' },
  { number: '02', title: 'Templates', description: 'Pre-built templates for common tasks that save hours every week.' },
  { number: '03', title: 'Automation', description: 'Connect your tools and automate repetitive processes.' },
  { number: '04', title: 'Optimization', description: 'Continuous improvement based on your usage patterns.' },
];

export function Method() {
  return (
    <section id="method" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src={methodImage}
              alt="The Axiora Method visualization"
              className="w-full max-w-md rounded-2xl animate-float"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              The <span className="gradient-text">Axiora Method</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Our proven four-step approach transforms how you work with AI, delivering measurable productivity gains from day one.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-4 items-start group"
                >
                  <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Learn how it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
