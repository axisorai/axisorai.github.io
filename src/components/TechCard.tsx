interface TechCardProps {
    name: string;
    models: string[];
    icon: React.ReactNode;
}

const TechCard = ({ name, models, icon }: TechCardProps) => {
    return (
        <div className="glass-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    {icon}
                </div>
                <h3 className="text-base font-medium text-foreground tracking-tight">
                    {name}
                </h3>
            </div>
            <div className="space-y-2">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="text-sm text-muted-foreground/70 pl-1 flex items-center gap-2 leading-relaxed"
                    >
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        {model}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
