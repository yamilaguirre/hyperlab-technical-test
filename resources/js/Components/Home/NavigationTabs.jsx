import React from "react";

export default function NavigationTabs({ activeTab = "Explorer", onTabChange }) {
    const tabs = ["Explorer", "Mis Suscripciones", "Trends", "Marcadores"];

    return (
        <div className="flex gap-2 px-4 mb-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange?.(tab)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === tab
                            ? "bg-white/20 text-white"
                            : "bg-dark-input text-white/70 hover:text-white"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

