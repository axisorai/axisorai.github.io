import { Layers, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface Product {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  originalPrice: string;
  price: string;
  features: string[];
  showTaxNote?: boolean;
  badge?: 'popular' | 'exclusive';
  cta: string;
  href: string;
  limitsNote?: string;
  isYearly?: boolean;
}

export function Products() {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      icon: Layers,
      titleKey: 'products.plus.title',
      descriptionKey: 'products.plus.description',
      originalPrice: '$20',
      price: '₺250',
      features: [
        'products.plus.features.feature1',
        'products.plus.features.feature2',
        'products.plus.features.feature3',
        'products.plus.features.feature4',
        'products.plus.features.feature5',
        'products.plus.features.feature6',
        'products.plus.features.feature7',
        'products.plus.features.feature8',
        'products.plus.features.feature9',
      ],
      showTaxNote: true,
      badge: 'popular',
      cta: 'products.cta.choose',
      href: '#contact',
      limitsNote: 'products.plus.limitsNote',
    },
    {
      icon: Crown,
      titleKey: 'products.pro.title',
      descriptionKey: 'products.pro.description',
      originalPrice: '$200',
      price: '₺650',
      features: [
        'products.pro.features.feature1',
        'products.pro.features.feature2',
        'products.pro.features.feature3',
        'products.pro.features.feature4',
        'products.pro.features.feature5',
        'products.pro.features.feature6',
        'products.pro.features.feature7',
        'products.pro.features.feature8',
        'products.pro.features.feature9',
      ],
      showTaxNote: true,
      cta: 'products.cta.choose',
      href: '#contact',
      limitsNote: 'products.pro.limitsNote',
    },
    {
      icon: Star,
      titleKey: 'products.exclusive.title',
      descriptionKey: 'products.exclusive.description',
      originalPrice: '$360+',
      price: '₺1.250',
      features: [
        'products.exclusive.features.feature1',
        'products.exclusive.features.feature2',
        'products.exclusive.features.feature3',
        'products.exclusive.features.feature4',
        'products.exclusive.features.feature5',
      ],
      showTaxNote: true,
      badge: 'exclusive',
      cta: 'products.cta.choose',
      href: '#contact',
      limitsNote: 'products.exclusive.limitsNote',
      isYearly: true,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={t(product.titleKey)}
              className="glass-card p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 right-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${product.badge === 'exclusive'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'bg-primary text-primary-foreground'
                    }`}>
                    {t(`products.badge.${product.badge}`)}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 text-foreground">{t(product.titleKey)}</h3>
              <p className="text-muted-foreground text-sm mb-5">
                {t(product.descriptionKey)}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">{t('products.pricing.normalPrice')} {product.originalPrice}</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-foreground">{product.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">
                    {product.isYearly ? t('products.pricing.perYear') : t('products.pricing.perMonth')}
                  </span>
                </div>
                {product.showTaxNote && (
                  <p className="text-xs text-muted-foreground/60 mt-1">{t('products.pricing.taxNote')}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {product.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                    {t(feature)}
                  </li>
                ))}
              </ul>

              {/* Limits Note */}
              {product.limitsNote && (
                <p className="text-xs text-muted-foreground/50 mb-4 italic">{t(product.limitsNote)}</p>
              )}

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full" asChild>
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
