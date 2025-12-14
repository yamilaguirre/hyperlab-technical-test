import React from "react";
import {
    FaHouse,
    FaMagnifyingGlass,
    FaPlus,
    FaPaperPlane,
    FaBell,
} from "react-icons/fa6";

export default function BottomNavigation({ activeTab = "home", onTabChange }) {
    const tabs = [
        { id: "home", icon: FaHouse, label: "Home" },
        { id: "search", icon: FaMagnifyingGlass, label: "Search" },
        { id: "create", icon: FaPlus, label: "Create" },
        { id: "messages", icon: FaPaperPlane, label: "Messages" },
        { id: "notifications", icon: FaBell, label: "Notifications" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-white/10">
            <div className="w-full max-w-md mx-auto flex items-center justify-around py-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange?.(tab.id)}
                            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                                isActive
                                    ? "text-primary"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Icon className="text-xl" />
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

