import { RocketIcon } from "lucide-react";

const Maintenance = () => {
    return (
        <div className="min-h-screen bg-[#0d1b3e] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-blue-200 rounded-full animate-pulse delay-75" />
                <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-yellow-100 rounded-full animate-pulse delay-150" />
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
            </div>

            <div className="relative z-10 max-w-lg mx-auto">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Placeholder for the rocket image - I'll use Lucide icon if image isn't available, but I'll try to use the image if I can import it */}
                        <RocketIcon className="w-24 h-24 text-red-500 animate-bounce" />
                        <div className="absolute -right-2 -top-2 text-3xl animate-ping">⚠️</div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                    Houston, we have a problem.
                </h1>

                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                    We are working on a solution. <br />
                    Please try again in <span className="font-bold text-yellow-400">10 minutes</span> at most.
                </p>

                <div className="w-full bg-blue-900/50 rounded-full h-2 mb-4 overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full w-1/3 animate-[shimmer_2s_infinite]"></div>
                </div>

                <p className="text-xs text-blue-300 uppercase tracking-widest opacity-70">
                    System Update in Progress
                </p>
            </div>
        </div>
    );
};

export default Maintenance;
