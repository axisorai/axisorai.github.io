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

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 leading-tight tracking-tight">
                            {t('portfolio.hero.title')} <span className="text-gradient">{t('portfolio.hero.titleHighlight')}</span>
                        </h1>
                        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
                            {t('portfolio.hero.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <p className="section-label text-center text-xs text-muted-foreground/60 uppercase tracking-[0.2em] mb-10">
                            {t('portfolio.technologies.label')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Monthly Card */}
                            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                <PricingCard
                                    title={t('portfolio.pricing.monthly.title')}
                                    price={t('portfolio.pricing.monthly.price')}
                                    period={t('portfolio.pricing.monthly.period')}
                                    description={[t('portfolio.pricing.monthly.description')]}
                                />
                            </div>

                            {/* Yearly / Featured Card */}
                            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                <PricingCard
                                    title={t('portfolio.pricing.yearly.title')}
                                    subtitle={t('portfolio.pricing.yearly.subtitle')}
                                    price={t('portfolio.pricing.yearly.price')}
                                    period={t('portfolio.pricing.yearly.period')}
                                    description={[
                                        t('portfolio.pricing.yearly.description1'),
                                        t('portfolio.pricing.yearly.description2'),
                                    ]}
                                    featured
                                    badge={t('portfolio.pricing.yearly.badge')}
                                />
                            </div>
                        </div>

                        {/* Trust Line */}
                        <div className="mt-16 text-center">
                            <p className="text-sm text-muted-foreground/60 flex items-center justify-center gap-2 leading-relaxed">
                                <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                                {t('portfolio.pricing.trust')}
                            </p>
                        </div>

                        {/* Link to Services */}
                        <div className="mt-8 text-center">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                                {t('portfolio.pricing.cta')} →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Index;
