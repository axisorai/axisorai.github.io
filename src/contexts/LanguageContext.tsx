import { createContext, useState, useEffect, ReactNode } from 'react';
import { tr } from '@/i18n/tr';
import { en } from '@/i18n/en';
import { Language, Translations } from '@/i18n/types';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
    tr,
    en,
};

// Helper function to get nested object value using dot notation
function getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        const stored = localStorage.getItem('axisorai-language');
        return (stored === 'tr' || stored === 'en') ? stored : 'tr';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('axisorai-language', lang);
        document.documentElement.lang = lang;

        // Update meta tags
        const currentTranslations = translations[lang];
        document.title = currentTranslations.meta.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', currentTranslations.meta.description);
        }
    };

    const t = (key: string): string => {
        return getNestedValue(translations[language], key);
    };

    useEffect(() => {
        // Set initial language attributes and meta tags
        document.documentElement.lang = language;
        const currentTranslations = translations[language];
        document.title = currentTranslations.meta.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', currentTranslations.meta.description);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
