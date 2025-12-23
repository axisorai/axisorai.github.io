import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const Services2 = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const steps = [
        {
            number: "01",
            title: t('method.steps.step1.title'),
            description: t('method.steps.step1.description'),
        },
        {
            number: "02",
            title: t('method.steps.step2.title'),
            description: t('method.steps.step2.description'),
        },
        {
            number: "03",
            title: t('method.steps.step3.title'),
            description: t('method.steps.step3.description'),
        },
        {
            number: "04",
            title: t('method.steps.step4.title'),
            description: t('method.steps.step4.description'),
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
                    <div className="container mx-auto text-center max-w-3xl">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 md:mb-6 leading-tight tracking-tight">
                            {t('method.title')}
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 leading-relaxed px-2">
                            {t('method.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="space-y-8 md:space-y-12">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="glass-card p-6 md:p-8 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Number */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <span className="text-2xl md:text-3xl font-bold text-gradient">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground/70 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-2xl text-center">
                        <div className="glass-card-featured p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                {t('method.cta')}
                            </h2>
                            <p className="text-muted-foreground/70 mb-6">
                                {t('products.disclaimer')}
                            </p>
                            <a
                                href="#pricing"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/#/packages';
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                {t('nav.getStarted')} →
                            </a>
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

export default Services2;
