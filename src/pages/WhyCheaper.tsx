import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Trash2, RefreshCw, DollarSign, ShieldCheck, Calendar, MessageSquareOff } from "lucide-react";

const WhyCheaper = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const reasons = [
        {
            icon: MessageSquareOff,
            title: t('whyCheaper.reasons.reason1.title'),
            description: t('whyCheaper.reasons.reason1.description'),
        },
        {
            icon: Calendar,
            title: t('whyCheaper.reasons.reason2.title'),
            description: t('whyCheaper.reasons.reason2.description'),
        },
        {
            icon: RefreshCw,
            title: t('whyCheaper.reasons.reason3.title'),
            description: t('whyCheaper.reasons.reason3.description'),
        },
        {
            icon: DollarSign,
            title: t('whyCheaper.reasons.reason4.title'),
            description: t('whyCheaper.reasons.reason4.description'),
        },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/8 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                            <Trash2 className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">{t('whyCheaper.badge')}</span>
                        </div>
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                            {t('whyCheaper.title')}
                        </h1>
                        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground/80 leading-relaxed px-2 max-w-2xl mx-auto">
                            {t('whyCheaper.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Main Explanation Card */}
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <div className="container mx-auto max-w-5xl">
                        <div className="glass-card-featured p-8 md:p-12 mb-12 text-center">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                                <Trash2 className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                {t('whyCheaper.keyMessage.title')}
                            </h2>
                            <p className="text-muted-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
                                {t('whyCheaper.keyMessage.description')}
                            </p>
                        </div>

                        {/* Reasons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-6 md:p-8 animate-fade-in group hover:border-primary/30 transition-all duration-300"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all">
                                                <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                                                {reason.title}
                                            </h3>
                                            <p className="text-muted-foreground/70 leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trade-Off Banner */}
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="glass-card p-6 md:p-10 border border-primary/20 rounded-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                                        <ShieldCheck className="w-8 h-8 text-amber-400" />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                                        {t('whyCheaper.tradeoff.title')}
                                    </h3>
                                    <p className="text-muted-foreground/80 leading-relaxed">
                                        {t('whyCheaper.tradeoff.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-2xl text-center">
                        <div className="glass-card-featured p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                {t('whyCheaper.cta.title')}
                            </h2>
                            <p className="text-muted-foreground/80 mb-8">
                                {t('whyCheaper.cta.description')}
                            </p>
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
                            >
                                {t('whyCheaper.cta.button')}
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

export default WhyCheaper;
