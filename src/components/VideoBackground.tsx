import { useIsMobile } from "@/hooks/use-mobile";

export const VideoBackground = () => {
    const isMobile = useIsMobile();

    return (
        <>
            {/* Background - Optimized video for mobile, full video for desktop */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src={isMobile ? "/background-video-mobile.mp4" : "/background-video.mp4"} type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-background/70" />
            </div>

            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none z-[1]" />
        </>
    );
};
