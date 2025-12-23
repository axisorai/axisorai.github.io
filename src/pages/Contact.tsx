import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
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
                    <div className="container mx-auto text-center max-w-2xl">
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                            {t('contact.title')}
                        </h1>
                        <p className="hero-subtitle text-base md:text-xl text-muted-foreground/80 leading-relaxed px-2">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-8 md:py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-2xl">
                        <div className="glass-card p-8 md:p-12">
                            {/* Email */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {t('contact.email.label')}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {t('contact.email.microtext')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a 
                                        href={`mailto:${t('contact.email.mailto')}`}
                                        className="text-primary hover:text-primary/80 transition-colors text-lg"
                                    >
                                        {t('contact.email.display')}
                                    </a>
                                    <a 
                                        href={`mailto:${t('contact.email.mailto')}`}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        Send Us Mail
                                    </a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Instagram className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {t('community.social.instagram')}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Send us a direct message
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a 
                                        href="https://www.instagram.com/axisorai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors text-lg"
                                    >
                                        @axisorai
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/direct/t/axisorai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        Send Direct Message
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 text-center">
                            <p className="text-muted-foreground/70 text-sm">
                                {t('footer.description')}
                            </p>
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

export default Contact;
