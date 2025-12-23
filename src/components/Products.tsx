import { Zap, Layers, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    icon: Zap,
    title: 'Axiora Workspace',
    description: 'Individual productivity bundle with essential AI tools for writing, research, and daily tasks.',
    features: ['AI Writing Assistant', 'Research Tools', 'Task Automation'],
    cta: 'Learn More',
    href: '#method',
  },
  {
    icon: Layers,
    title: 'Axiora Plus',
    description: 'Advanced workflows and premium templates for power users who need more capabilities.',
    features: ['Custom Workflows', 'Premium Templates', 'Priority Processing'],
    cta: 'Learn More',
    href: '#method',
  },
  {
    icon: Crown,
    title: 'Axiora Pro',
    description: 'Priority support with custom workflow design for professionals and growing teams.',
    features: ['Custom Workflows', 'Dedicated Support', 'API Access'],
    cta: 'Learn More',
    href: '#method',
  },
  {
    icon: Users,
    title: 'Team Enablement',
    description: 'Complete onboarding, policy setup, and team training for enterprise organizations.',
    features: ['Team Onboarding', 'Policy Framework', 'Live Training'],
    cta: 'Contact Sales',
    href: '#contact',
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(188,40%,15%)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Products</span> for Every Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From individual productivity to enterprise-wide transformation, we have the right solution for you.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-4 max-w-xl mx-auto">
            Axiora does not resell third-party accounts. We provide AI workflows, training, and managed solutions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="glass-card p-6 flex flex-col hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={product.href}>{product.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
