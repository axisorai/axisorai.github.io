import TechCard from "@/components/TechCard";
import PricingCard from "@/components/PricingCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import OpenAIIcon from "@/components/icons/OpenAIIcon";
import GeminiIcon from "@/components/icons/GeminiIcon";
import ClaudeIcon from "@/components/icons/ClaudeIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;
    const isMobile = useIsMobile();

    const technologies = [
        {
            name: "ChatGPT Paketi",
            models: ["GPT-5.2", "GPT-5.2 Thinking", "GPT-5.2 Pro", "GPT-5 Thinking Mini"],
            icon: <OpenAIIcon />,
            price: "₺650/ay",
        },
        {
            name: "ALL-IN-ONE Paket",
            models: ["Sonar (Perplexity)", "GPT-5.2", "Claude Sonnet 4.5", "Gemini 3 Pro", "Grok 4.1", "Kimi K2"],
            icon: <GeminiIcon />,
            price: "₺1.250/yıl",
        },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background - Optimized video for mobile, full video for desktop */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src={isMobile ? "/background-video-mobile.mp4" : "/background-video.mp4"} type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-background/70" />
            </div>

            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none z-[1]" />

            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                            {t('portfolio.hero.title')} <span className="text-gradient block md:inline">{t('portfolio.hero.titleHighlight')}</span>
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed px-2 mb-8">
                            {t('portfolio.hero.subtitle')}
                        </p>
                        
                        {/* Hero CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/packages"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                            >
                                {t('hero.ctaPrimary')}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border border-border/50 rounded-xl hover:bg-muted/50 transition-all"
                            >
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section id="technologies" className="py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <p className="section-label text-center text-xs md:text-sm text-muted-foreground/60 uppercase tracking-[0.2em] mb-6 md:mb-10">
                            {t('portfolio.technologies.label')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <TechCard {...tech} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-10 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                            {/* Monthly Card */}
                            <div className="animate-fade-in order-2 md:order-1" style={{ animationDelay: '0.2s' }}>
                                <PricingCard
                                    title={t('portfolio.pricing.monthly.title')}
                                    price={t('portfolio.pricing.monthly.price')}
                                    period={t('portfolio.pricing.monthly.period')}
                                    originalPrice={t('portfolio.pricing.monthly.originalPrice')}
                                    savingsPercent={t('portfolio.pricing.monthly.savingsPercent')}
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
                                    originalPrice={t('portfolio.pricing.yearly.originalPrice')}
                                    savingsPercent={t('portfolio.pricing.yearly.savingsPercent')}
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

                        {/* Link to Services */}
                        <div className="mt-10 text-center">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                            >
                                {t('portfolio.pricing.cta')} →
                            </Link>
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

export default Index;
