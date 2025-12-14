import React from "react";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import ProgressBar from "@/Components/Onboarding/ProgressBar";

export default function OnboardingLayout({ children, title, showBack = true }) {
    const { prevStep, currentStep } = useOnboarding();

    return (
        <div className="min-h-screen bg-dark-bg text-text-main flex flex-col items-center font-sans selection:bg-primary selection:text-white">
            <div className="w-full max-w-mobile flex flex-col min-h-screen p-6 relative">
                <header className="flex items-center gap-4 pt-2 mb-8">
                    {showBack && currentStep > 1 && (
                        <button
                            onClick={prevStep}
                            className="text-white p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                    )}
                    <div className="flex-1">
                        <ProgressBar />
                    </div>
                </header>

                <main className="flex-1 flex flex-col">
                    {title && (
                        <h1 className="text-3xl font-medium text-center text-white mb-8 mt-4 leading-tight">
                            {title}
                        </h1>
                    )}

                    <div className="flex-1 flex flex-col">{children}</div>
                </main>

                <footer className="mt-auto py-6 text-center">
                    <div className="flex justify-center gap-3 text-[10px] text-text-muted uppercase tracking-wider">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Cookies Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
