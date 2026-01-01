import { useTranslation } from '@/hooks/useTranslation';

export function LanguageToggle() {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center gap-1 border border-border/50 rounded-lg p-1 bg-background/50">
            <button
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${language === 'tr'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                aria-label="Türkçe"
                aria-pressed={language === 'tr'}
            >
                <svg className="w-4 h-4" viewBox="0 0 640 480" fill="currentColor">
                    <rect width="640" height="480" fill="#E30A17"/>
                    <circle cx="240" cy="240" r="120" fill="#fff"/>
                    <circle cx="260" cy="240" r="96" fill="#E30A17"/>
                    <polygon points="340,180 370,260 290,220 390,220 310,260" fill="#fff"/>
                </svg>
                TR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${language === 'en'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                aria-label="English"
                aria-pressed={language === 'en'}
            >
                <svg className="w-4 h-4" viewBox="0 0 640 480" fill="currentColor">
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                </svg>
                EN
            </button>
        </div>
    );
}
