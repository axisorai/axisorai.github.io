interface TechCardProps {
    name: string;
    models: string[];
    icon: React.ReactNode;
    price?: string;
    badge?: string;
    originalPrice?: string;
    savingsPercent?: string;
}

const TechCard = ({ name, models, icon, price, badge, originalPrice, savingsPercent }: TechCardProps) => {
    return (
        <div className="glass-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 group bg-black/60 backdrop-blur-md border border-white/10 relative">
            {badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {badge}
                </div>
            )}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-lg">
                        {name}
                    </h3>
                    {originalPrice && savingsPercent && (
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
                            <span className="text-xs font-bold text-green-400 bg-green-400/20 px-2 py-0.5 rounded">
                                {savingsPercent} Savings
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
