import { Zap, Layers, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface Product {
  icon: any;
  title: string;
  description: string;
  features: string[];
  price?: string;
  showTaxNote?: boolean;
  badge?: string;
  cta: string;
  href: string;
}

export function Products() {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      icon: Zap,
      title: 'Axisorai Workspace',
      description: 'products.workspace.description',
      features: [
        'products.workspace.features.feature1',
        'products.workspace.features.feature2',
        'products.workspace.features.feature3',
      ],
      price: '₺1.499',
      showTaxNote: true,
      cta: 'products.cta.choose',
      href: '#contact',
    },
    {
      icon: Layers,
      title: 'Axisorai Plus',
      description: 'products.plus.description',
      features: [
        'products.plus.features.feature1',
        'products.plus.features.feature2',
        'products.plus.features.feature3',
      ],
      price: '₺2.999',
      showTaxNote: true,
      badge: 'popular',
      cta: 'products.cta.choose',
      href: '#contact',
    },
    {
      icon: Crown,
      title: 'Axisorai Pro',
      description: 'products.pro.description',
      features: [
        'products.pro.features.feature1',
        'products.pro.features.feature2',
        'products.pro.features.feature3',
      ],
      price: '₺4.999',
      showTaxNote: true,
      cta: 'products.cta.choose',
      href: '#contact',
    },
    {
      icon: Users,
      title: 'Team Enablement',
      description: 'products.team.description',
      features: [
        'products.team.features.feature1',
        'products.team.features.feature2',
        'products.team.features.feature3',
      ],
      cta: 'products.cta.contactSales',
      href: '#contact',
    },
  ];

  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(188,40%,15%)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('products.sectionTitle')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('products.sectionSubtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="glass-card p-6 flex flex-col hover:border-primary/50 transition-all duration-300 group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {t('products.badge.popular')}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t(product.description)}
              </p>

              {/* Price */}
              <div className="mb-4">
                {product.price ? (
                  <div>
                    <div>
                      <span className="text-3xl font-bold text-foreground">{product.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">{t('products.pricing.perMonth')}</span>
                    </div>
                    {product.showTaxNote && (
                      <p className="text-xs text-muted-foreground/60 mt-1">{t('products.pricing.taxNote')}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-lg font-semibold text-primary">{t('products.pricing.custom')}</div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {product.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {t(feature)}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={product.href}>{t(product.cta)}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Transparency Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {t('products.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
