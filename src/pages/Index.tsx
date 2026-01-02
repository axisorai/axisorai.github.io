import TechCard from "@/components/TechCard";
import PricingCard from "@/components/PricingCard";
import WebDesignService from "@/components/WebDesignService";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import OpenAIIcon from "@/components/icons/OpenAIIcon";
import ClaudeIcon from "@/components/icons/ClaudeIcon";
import GeminiIcon from "@/components/icons/GeminiIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { EtherealHero } from "@/components/EtherealHero";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const technologies = [
        {
            name: t('portfolio.technologies.chatgpt.name'),
            models: ["GPT-5.2", "GPT-5.2 Thinking", "GPT-5.2 Pro", "GPT-5 Thinking Mini"],
            icon: <OpenAIIcon />,
            price: t('portfolio.technologies.chatgpt.price'),
        },
        {
            name: t('portfolio.technologies.claude.name'),
            models: ["Claude Sonnet 4.5", "Opus 4.5 Thinking"],
            icon: <ClaudeIcon />,
            price: t('portfolio.technologies.claude.price'),
        },
        {
            name: t('portfolio.technologies.gemini.name'),
            models: ["Gemini Pro 2.0", "Gemini Advanced", "1.5 Pro Deep Research"],
            icon: <GeminiIcon />,
            price: t('portfolio.technologies.gemini.price'),
            badge: t('portfolio.technologies.gemini.badge'),
        },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Ethereal Three.js Background */}
            <EtherealHero />

            {/* Background glow effects - fixed to follow scroll */}
            <div className="fixed inset-0 pointer-events-none z-[1]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
            </div>

            {/* Subtle grid overlay - fixed */}
            <div className="fixed inset-0 subtle-grid opacity-20 pointer-events-none z-[1]" />

            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section - Inside the sphere */}
                <section className="min-h-[60vh] flex items-center justify-center py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto text-center max-w-xl">
                        {/* Floating badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-black/40 border border-cyan-400/30 backdrop-blur-md animate-fade-in">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            <span className="text-xs text-cyan-300 font-medium">{t('portfolio.hero.badge')}</span>
                        </div>
                        
                        <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)' }}>
                            <span className="block mb-1">{t('portfolio.hero.title')}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                                {t('portfolio.hero.titleHighlight')}
                            </span>
                        </h1>
                        
                        <p className="hero-subtitle text-sm md:text-base text-gray-200 max-w-lg mx-auto leading-relaxed px-2 mb-8" style={{ textShadow: '0 0 20px rgba(0,0,0,0.9)' }}>
                            {t('portfolio.hero.subtitle')}
                        </p>
                        
                        {/* Hero CTA Buttons - smaller */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/solutions"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                            >
                                {t('hero.ctaServices')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-white/40 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all backdrop-blur-md bg-black/30"
                            >
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>

                        {/* Scroll indicator */}
                        <div className="mt-10 animate-bounce">
                            <div className="w-5 h-8 mx-auto rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                                <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section - Redesigned */}
                <section id="technologies" className="py-16 md:py-24 px-4 md:px-6">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <p className="text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4 font-semibold">
                                {t('portfolio.technologies.label')}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                                {t('portfolio.technologies.title')}
                            </h2>
                            <p className="text-lg font-medium text-gray-200 drop-shadow-md max-w-xl mx-auto">
                                {t('portfolio.technologies.subtitle')}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {technologies.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="animate-fade-in group"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="relative p-6 rounded-3xl bg-gradient-to-b from-card/80 to-card/40 border border-border/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all">
                                                {tech.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-foreground mb-1">{tech.name}</h3>
                                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                                    {tech.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {tech.models.map((model, i) => (
                                                <div key={i} className="flex items-center gap-2 text-muted-foreground/80">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                                    <span className="text-sm">{model}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA to packages */}
                        <div className="text-center mt-10">
                            <Link
                                to="/solutions"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-bold transition-colors"
                            >
                                {t('portfolio.technologies.cta')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Web Design Service Section */}
                <WebDesignService />

                {/* Pricing Section - Redesigned */}
                <section id="pricing" className="py-16 md:py-24 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4 font-semibold">
                                {t('portfolio.pricing.label')}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t('portfolio.pricing.title')}
                            </h2>
                        </div>
                        
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
                        <div className="mt-12 text-center">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-2xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                            >
                                {t('hero.ctaSecondary')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
