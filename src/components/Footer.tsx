import { Instagram, Send } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/axisorai/', label: 'Instagram' },
  { icon: Send, href: 'https://t.me/+19172670527', label: 'Telegram' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          {/* Brand */}
          <div className="text-center">
            <button 
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold gradient-text"
            >
              axisorai
            </button>
            <p className="text-muted-foreground mt-4 max-w-xs mx-auto">
              {t('footer.description')}
            </p>

            {/* How We Offer Link */}
            <div className="mt-6">
              <Link
                to="/services2"
                className="inline-flex items-center gap-2 text-5xl font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {t('footer.howWeOffer')} →
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center">
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
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
