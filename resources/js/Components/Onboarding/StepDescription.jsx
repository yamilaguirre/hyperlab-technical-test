import React from "react";

export default function StepDescription({
    children,
    className = "",
    variant = "default", // "default", "center", "primary"
}) {
    const baseClasses = "text-white/80 text-sm mb-6";
    const variantClasses = {
        default: "",
        center: "text-center",
        primary: "text-primary text-xs mb-8",
    };

    return (
        <p className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </p>
    );
}

