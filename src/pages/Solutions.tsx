import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TechCard from "@/components/TechCard";
import OpenAIIcon from "@/components/icons/OpenAIIcon";
import GeminiIcon from "@/components/icons/GeminiIcon";
import ClaudeIcon from "@/components/icons/ClaudeIcon";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const Solutions = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const technologies = [
        {
            name: "ChatGPT Package (Monthly)",
            models: ["GPT-5.2", "GPT-5.2 Thinking", "GPT-5.2 Pro", "GPT-5 Thinking Mini"],
            icon: <OpenAIIcon />,
        },
        {
            name: "ALL-IN-ONE Package (Yearly)",
            models: ["Sonar (Perplexity)", "GPT-5.2", "Claude Sonnet 4.5", "Gemini 3 Pro", "Grok 4.1", "Kimi K2 Thinking"],
            icon: <GeminiIcon />,
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

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                            AI <span className="text-gradient">{t('nav.solutions')}</span>
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed px-2">
                            {t('portfolio.hero.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <p className="section-label text-center text-[10px] md:text-xs text-muted-foreground/60 uppercase tracking-[0.2em] mb-6 md:mb-10">
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

                {/* Features/Benefits Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {t('method.steps.step1.title')}
                                </h3>
                                <p className="text-muted-foreground/70">
                                    {t('method.steps.step1.description')}
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {t('method.steps.step2.title')}
                                </h3>
                                <p className="text-muted-foreground/70">
                                    {t('method.steps.step2.description')}
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {t('method.steps.step3.title')}
                                </h3>
                                <p className="text-muted-foreground/70">
                                    {t('method.steps.step3.description')}
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {t('method.steps.step4.title')}
                                </h3>
                                <p className="text-muted-foreground/70">
                                    {t('method.steps.step4.description')}
                                </p>
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

export default Solutions;
