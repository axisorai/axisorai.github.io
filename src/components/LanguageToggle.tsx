import { useTranslation } from '@/hooks/useTranslation';

export function LanguageToggle() {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center gap-1 border border-border/50 rounded-lg p-1 bg-background/50">
            <button
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all duration-200 ${language === 'tr'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                aria-label="Türkçe"
                aria-pressed={language === 'tr'}
            >
                🇹🇷 TR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all duration-200 ${language === 'en'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                aria-label="English"
                aria-pressed={language === 'en'}
            >
                🇬🇧 EN
            </button>
        </div>
    );
}
