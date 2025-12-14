import React from "react";

export default function CategoryChip({
    label,
    isSelected,
    isDisabled,
    onClick,
    className = "",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                isSelected
                    ? "border-primary bg-primary text-white"
                    : isDisabled
                    ? "border-white/10 bg-dark-card text-white/50 cursor-not-allowed"
                    : "border-white/20 bg-dark-card text-white hover:bg-white/10"
            } ${className}`}
        >
            {label}
        </button>
    );
}

