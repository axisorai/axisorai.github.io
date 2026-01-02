interface TechCardProps {
    name: string;
    models: string[];
    icon: React.ReactNode;
    price?: string;
    badge?: string;
    originalPrice?: string;
    savingsPercent?: string;
    savingsText?: string;
}

const TechCard = ({ name, models, icon, price, badge, originalPrice, savingsPercent, savingsText }: TechCardProps) => {
    return (
        <div className="glass-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 group bg-black/60 backdrop-blur-md border border-white/10 relative">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-lg flex items-center gap-2">
                        <span>{name}</span>
                        {badge && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
                                <span className="text-sm">🆕</span>
                                <span>{badge}</span>
                            </span>
                        )}
                    </h3>
                    {originalPrice && savingsPercent && (
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
                            <span className="text-xs font-bold text-green-400 bg-green-400/20 px-2 py-0.5 rounded">
                                {savingsPercent} {savingsText || 'Savings'}
                            </span>
                        </div>
                    )}
                    {price && (
                        <p className="text-lg font-bold text-cyan-400 drop-shadow-lg mt-1">{price}</p>
                    )}
                </div>
            </div>
            <div className="space-y-2">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="text-base text-gray-200 font-medium pl-1 flex items-center gap-2 leading-relaxed drop-shadow-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {model}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
