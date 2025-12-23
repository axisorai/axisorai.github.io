import { Instagram } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const footerLinks = {
  products: [
    { nameKey: 'Axisorai Workspace', href: '#products' },
    { nameKey: 'Axisorai Plus', href: '#products' },
    { nameKey: 'Axisorai Pro', href: '#products' },
    { nameKey: 'Team Enablement', href: '#products' },
  ],
  company: [
    { nameKey: 'footer.links.about', href: '#commitment' },
    { nameKey: 'footer.links.blog', href: '#community' },
    { nameKey: 'footer.links.careers', href: '#' },
    { nameKey: 'footer.links.press', href: '#' },
  ],
  resources: [
    { nameKey: 'footer.links.documentation', href: '#' },
    { nameKey: 'footer.links.helpCenter', href: '#' },
    { nameKey: 'footer.links.community', href: '#community' },
    { nameKey: 'footer.links.contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text">
              Axisorai
            </a>
            <p className="text-muted-foreground mt-4 max-w-xs">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.nameKey}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
