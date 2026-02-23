import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Globe, Shield, Palette, Search, Smartphone, Server, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WebDesignService = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext not found");
    const { t } = context;

    const services = [
        {
            icon: Globe,
            titleKey: 'webDesign.services.domain.title',
            descriptionKey: 'webDesign.services.domain.description',
        },
        {
            icon: Shield,
            titleKey: 'webDesign.services.security.title',
            descriptionKey: 'webDesign.services.security.description',
        },
        {
            icon: Palette,
            titleKey: 'webDesign.services.modernDesign.title',
            descriptionKey: 'webDesign.services.modernDesign.description',
        },
        {
            icon: Search,
            titleKey: 'webDesign.services.seo.title',
            descriptionKey: 'webDesign.services.seo.description',
        },
        {
            icon: Smartphone,
            titleKey: 'webDesign.services.responsive.title',
            descriptionKey: 'webDesign.services.responsive.description',
        },
        {
            icon: Server,
            titleKey: 'webDesign.services.hosting.title',
            descriptionKey: 'webDesign.services.hosting.description',
        },
    ];

    const packages = [
        {
            name: t('webDesign.packages.github.name'),
            price: '₺5.000',
            period: 'tek seferlik',
            domain: 'github.io',
            features: [
                t('webDesign.packages.github.feature1'),
                t('webDesign.packages.github.feature2'),
                t('webDesign.packages.github.feature3'),
                t('webDesign.packages.github.feature4'),
                t('webDesign.packages.github.feature5'),
            ],
            featured: true,
        },
        {
            name: t('webDesign.packages.custom.name'),
            price: '₺8.500 + ₺1.000/ay',
            period: '12 ay taahhüt',
            domain: '.com / .com.tr',
            features: [
                t('webDesign.packages.custom.feature1'),
                t('webDesign.packages.custom.feature2'),
                t('webDesign.packages.custom.feature3'),
                t('webDesign.packages.custom.feature4'),
                t('webDesign.packages.custom.feature5'),
                t('webDesign.packages.custom.feature6'),
            ],
            pricing: t('webDesign.packages.custom.pricing'),
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                        {t('webDesign.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow-md max-w-2xl mx-auto">
                        {t('webDesign.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {t(service.titleKey)}
                            </h3>
                            <p className="text-muted-foreground">
                                {t(service.descriptionKey)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pricing Packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`glass-card p-8 ${pkg.featured ? 'ring-2 ring-primary' : ''}`}
                        >
                            {pkg.featured && (
                                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                                    {t('webDesign.packages.popular')}
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                {pkg.name}
                            </h3>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                                {pkg.period}
                            </div>
                            <div className="text-sm text-muted-foreground mb-6">
                                {pkg.domain} {t('webDesign.packages.domainIncluded')}
                            </div>
                            {pkg.pricing && (
                                <div className="text-sm bg-primary/5 text-foreground/80 px-4 py-3 rounded-lg mb-6 border border-primary/20">
                                    {pkg.pricing}
                                </div>
                            )}
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                {t('webDesign.cta')}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                        {t('webDesign.bottomText')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                    >
                        {t('webDesign.ctaButton')}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WebDesignService;
