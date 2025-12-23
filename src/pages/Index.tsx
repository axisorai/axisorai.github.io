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

const Index = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const technologies = [
        {
            name: "OpenAI",
            models: ["GPT 5.2", "GPT 5.2 Thinking", "GPT 3.5 Pro"],
            icon: <OpenAIIcon />,
        },
        {
            name: "Google Gemini",
            models: ["2.5 Pro", "Flash"],
            icon: <GeminiIcon />,
        },
        {
            name: "Anthropic Claude",
            models: ["Opus", "Sonnet 4.5"],
            icon: <ClaudeIcon />,
        },
    ];

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

            <main className="relative z-10 space-y-4 md:space-y-0 pb-10 md:pb-0">
                {/* Hero Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                            {t('portfolio.hero.title')} <span className="text-gradient block md:inline">{t('portfolio.hero.titleHighlight')}</span>
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed px-2">
                            {t('portfolio.hero.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Technologies Section */}
                <section id="technologies" className="py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <p className="section-label text-center text-[10px] md:text-xs text-muted-foreground/60 uppercase tracking-[0.2em] mb-6 md:mb-10">
                            {t('portfolio.technologies.label')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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

                        {/* Link to Services */}
                        <div className="mt-8 text-center pb-8 md:pb-0">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors py-2 px-4 active:scale-95 transition-transform"
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
