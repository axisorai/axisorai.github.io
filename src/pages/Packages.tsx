import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Instagram, Send } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/axisorai/', label: 'Instagram' },
  { icon: Send, href: 'https://t.me/+19172670527', label: 'Telegram' },
];

const Packages = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                            {t('nav.products')} <span className="text-gradient">{t('portfolio.hero.titleHighlight')}</span>
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed px-2">
                            {t('products.sectionSubtitle')}
                        </p>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-10 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                            {/* Monthly Card */}
                            <div className="animate-fade-in order-2 md:order-1" style={{ animationDelay: '0.2s' }}>
                                <PricingCard
                                    title={t('portfolio.pricing.monthly.title')}
                                    price={t('portfolio.pricing.monthly.price')}
                                    period={t('portfolio.pricing.monthly.period')}
                                    description={[
                                        t('portfolio.pricing.monthly.description'),
                                        t('portfolio.pricing.monthly.trust') || '',
                                        t('portfolio.pricing.monthly.ownAccount') || '',
                                    ]}
                                />
                            </div>

                            {/* Yearly / Featured Card */}
                            <div className="animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.3s' }}>
                                <PricingCard
                                    title={t('portfolio.pricing.yearly.title')}
                                    subtitle={t('portfolio.pricing.yearly.subtitle')}
                                    price={t('portfolio.pricing.yearly.price')}
                                    period={t('portfolio.pricing.yearly.period')}
                                    description={[
                                        t('portfolio.pricing.yearly.description1'),
                                        t('portfolio.pricing.yearly.description2'),
                                        t('portfolio.pricing.yearly.ownAccount') || '',
                                    ]}
                                    featured
                                    badge={t('portfolio.pricing.yearly.badge')}
                                />
                            </div>
                        </div>

                        {/* Social Contact Buttons */}
                        <div className="mt-12 text-center">
                            <p className="text-muted-foreground mb-6 text-lg">
                                {t('contact.title')}
                            </p>
                            <div className="flex gap-6 justify-center">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-20 h-20 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                    >
                                        <social.icon className="w-10 h-10" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div id="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Packages;
