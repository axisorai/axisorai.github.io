import { Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mascotImage from '@/assets/mascot.png';

const features = [
  { title: 'Weekly Tips', description: 'Practical AI productivity tips every week' },
  { title: 'Mini-Guides', description: 'Step-by-step guides for common workflows' },
  { title: 'Prompt Drops', description: 'Ready-to-use prompts for any task' },
];

export function Community() {
  return (
    <section id="community" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(262,40%,12%)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mascot */}
            <div className="flex justify-center lg:order-2">
              <img
                src={mascotImage}
                alt="Axiora AI mascot"
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-float"
              />
            </div>

            {/* Content */}
            <div className="lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join the <span className="gradient-text">Community</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Learn AI productivity with thousands of professionals. Get exclusive content, tips, and resources.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="text-center lg:text-left">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Social CTAs */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                    X / Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
