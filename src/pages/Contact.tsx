import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useContext, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Mail, Instagram, Send, User, Phone, MessageSquare } from "lucide-react";
import { VideoBackground } from "@/components/VideoBackground";

const Contact = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t, language } = context;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Language-aware email formatting
        const isEnglish = language === 'en';
        const subject = isEnglish 
            ? `Contact Form - ${formData.name}` 
            : `İletişim Formu - ${formData.name}`;
        
        const bodyLabels = isEnglish 
            ? { name: 'Name', email: 'Email', phone: 'Phone', message: 'Message' }
            : { name: 'İsim', email: 'E-posta', phone: 'Telefon', message: 'Mesaj' };
        
        const body = `${bodyLabels.name}: ${formData.name}
${bodyLabels.email}: ${formData.email}
${bodyLabels.phone}: ${formData.phone || '-'}

${bodyLabels.message}:
${formData.message}`;
        
        const mailtoLink = `mailto:celebifinans@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <VideoBackground />

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

                {/* Contact Form */}
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <div className="container mx-auto max-w-2xl">
                        <div className="glass-card p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                                {t('contact.form.title') || 'Bize Mesaj Gönderin'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <User className="w-4 h-4 text-primary" />
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={t('contact.form.namePlaceholder') || 'Adınız Soyadınız'}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Mail className="w-4 h-4 text-primary" />
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={t('contact.form.emailPlaceholder') || 'ornek@email.com'}
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Phone className="w-4 h-4 text-primary" />
                                        {t('contact.form.phone') || 'Telefon'}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder={t('contact.form.phonePlaceholder') || '+90 5XX XXX XX XX'}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                        placeholder={t('contact.form.messagePlaceholder') || 'Mesajınızı buraya yazın...'}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                                >
                                    <Send className="w-5 h-5" />
                                    {t('contact.form.submit')}
                                </button>
                            </form>
                        </div>
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

                            {/* Telegram */}
                            <div className="mt-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Send className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Telegram
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Message us on Telegram
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a 
                                        href="https://t.me/axisorai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors text-lg"
                                    >
                                        @axisorai
                                    </a>
                                    <a 
                                        href="https://t.me/axisorai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        Message on Telegram
                                    </a>
                                </div>
                            </div>

                            {/* Crypto Payments */}
                            <div className="mt-8 pt-8 border-t border-border/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                                        <span className="text-2xl">₿</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {t('contact.crypto.title')}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {t('contact.crypto.subtitle')}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                                    <p className="text-sm text-muted-foreground mb-3">{t('contact.crypto.accepted')}</p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500/10 text-orange-400 rounded-lg text-sm font-medium border border-orange-500/20">
                                            <span className="text-lg">₿</span> {t('contact.crypto.btc')}
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20">
                                            <span className="text-lg">Ξ</span> {t('contact.crypto.eth')}
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-3 py-2 bg-green-500/10 text-green-400 rounded-lg text-sm font-medium border border-green-500/20">
                                            <span className="text-lg">$</span> {t('contact.crypto.usdt')}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground/70 mt-3">{t('contact.crypto.note')}</p>
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
