import React from "react";
import HeaderHome from "@/Components/Home/HeaderHome";
import NavigationTabs from "@/Components/Home/NavigationTabs";
import BottomNavigation from "@/Components/Home/BottomNavigation";

export default function HomeLayout({ children, balance, activeTab, onTabChange }) {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <div className="w-full max-w-md mx-auto pb-20">
                <HeaderHome balance={balance} />
                <NavigationTabs activeTab={activeTab} onTabChange={onTabChange} />
                <main className="overflow-y-auto">{children}</main>
            </div>
            <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    );
}

