import React from "react";
import useTranslation from "@/Hooks/useTranslation";

export default function Divider({ label = "OR", className = "" }) {
    const { t } = useTranslation();

    return (
        <div className={`relative flex py-5 items-center ${className}`}>
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase">
                {t(label)}
            </span>
            <div className="flex-grow border-t border-white/10"></div>
        </div>
    );
}

