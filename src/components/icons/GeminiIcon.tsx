const GeminiIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path
            d="M12 24C12 24 12 12 24 12C12 12 12 0 12 0C12 0 12 12 0 12C12 12 12 24 12 24Z"
            fill="url(#gemini-gradient)"
        />
        <defs>
            <linearGradient
                id="gemini-gradient"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#4285F4" />
                <stop offset="0.5" stopColor="#9B72CB" />
                <stop offset="1" stopColor="#D96570" />
            </linearGradient>
        </defs>
    </svg>
);

export default GeminiIcon;
