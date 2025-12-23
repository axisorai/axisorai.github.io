import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component<
    { children: ReactNode },
    { hasError: boolean; error: Error | null; errorInfo: ErrorInfo | null }
> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
                    <div className="max-w-2xl w-full p-6 border border-destructive/50 rounded-lg bg-destructive/10">
                        <h1 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h1>
                        <div className="space-y-4 font-mono text-sm overflow-auto max-h-[60vh]">
                            <div className="p-4 bg-background/50 rounded border border-border">
                                <p className="font-semibold text-destructive">{this.state.error?.toString()}</p>
                            </div>
                            {this.state.errorInfo && (
                                <pre className="p-4 bg-background/50 rounded border border-border whitespace-pre-wrap text-muted-foreground">
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            )}
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </ErrorBoundary>
);
