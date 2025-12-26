interface PricingCardProps {
    title: string;
    subtitle?: string;
    price: string;
    period: string;
    description: string[];
    featured?: boolean;
    badge?: string;
    originalPrice?: string;
    savingsPercent?: string;
}

const PricingCard = ({
    title,
    subtitle,
    price,
    period,
    description,
    featured = false,
    badge,
    originalPrice,
    savingsPercent,
}: PricingCardProps) => {
    return (
        <div
            className={`relative p-8 transition-all duration-300 !overflow-visible ${featured
                ? "glass-card-featured scale-[1.02]"
                : "glass-card hover:border-muted-foreground/30"
                }`}
        >
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-max pointer-events-none">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md shadow-[0_0_10px_rgba(var(--primary),0.2)] tracking-wide whitespace-nowrap pointer-events-auto">
                        {badge}
                    </span>
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1 tracking-tight">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-base text-muted-foreground/70 leading-relaxed">{subtitle}</p>
                )}
            </div>

            <div className="text-center mb-6">
                {originalPrice && (
                    <div className="mb-2">
                        <span className="text-2xl text-muted-foreground/50 line-through">
                            {originalPrice}
                        </span>
                        {savingsPercent && (
                            <span className="ml-2 inline-flex items-center px-3 py-1.5 text-sm font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                {savingsPercent} Tasarruf
                            </span>
                        )}
                    </div>
                )}
                <div className="flex items-baseline justify-center gap-1">
                    <span
                        className={`text-5xl font-bold tracking-tight ${featured ? "text-gradient" : "text-foreground"
                            }`}
                    >
                        {price}
                    </span>
                    <span className="text-muted-foreground/60 text-base font-normal">/ {period}</span>
                </div>
            </div>

            <div className="space-y-3">
                {description.map((line, index) => (
                    <p
                        key={index}
                        className="text-base text-muted-foreground/80 text-center leading-relaxed"
                    >
                        {line}
                    </p>
                ))}
            </div>

            {featured && (
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent" />
            )}
        </div>
    );
};

export default PricingCard;
