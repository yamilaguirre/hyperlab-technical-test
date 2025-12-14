import React from "react";
import { useOnboarding } from "@/Contexts/OnboardingContext";

export default function ProgressBar() {
    const { progressPercentage } = useOnboarding();

    return (
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
            />
        </div>
    );
}
