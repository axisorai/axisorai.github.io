import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShaderLogo } from '@/components/ui/shader-logo';
import { MorphingText } from '@/components/ui/liquid-text';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const navLinks = [
  { name: 'services', href: '/solutions' },
  { name: 'contact', href: '/contact' },
];

const brandTexts = ['axisorai', 'AI', 'Web', 'axisorai'];

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // If not on home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with id ${targetId} not found`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ShaderLogo size={36} className="rounded-md" />
            <MorphingText 
              texts={brandTexts} 
              className="h-8 w-24 text-[16pt] md:text-[18pt] lg:text-[20pt] text-foreground"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                {t(`nav.${link.name}`)}
              </Link>
            ))}
            <LanguageToggle />
            <Button size="sm" asChild>
              <Link to="/solutions">
                {t('nav.getStarted')}
              </Link>
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
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${link.name}`)}
                </Link>
              ))}
              <div className="pt-2 pb-2">
                <LanguageToggle />
              </div>
              <Button className="mt-2" asChild>
                <Link
                  to="/solutions"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.getStarted')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
