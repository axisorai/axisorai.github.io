import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageToggle } from '@/components/LanguageToggle';

const navLinks = [
  { name: 'products', href: '#products' },
  { name: 'solutions', href: '#method' },
  { name: 'about', href: '#commitment' },
  { name: 'contact', href: '#contact' },
];

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            Axisorai
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {t(`nav.${link.name}`)}
              </a>
            ))}
            <LanguageToggle />
            <Button size="sm" asChild>
              <a href="#contact">{t('nav.getStarted')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${link.name}`)}
                </a>
              ))}
              <div className="pt-2 pb-2">
                <LanguageToggle />
              </div>
              <Button className="mt-2" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  {t('nav.getStarted')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
