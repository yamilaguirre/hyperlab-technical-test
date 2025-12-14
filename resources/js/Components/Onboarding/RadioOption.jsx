import React from "react";

export default function RadioOption({
    value,
    checked,
    onChange,
    label,
    name,
    className = "",
}) {
    return (
        <label
            className={`flex items-center gap-4 cursor-pointer group ${className}`}
        >
            <div className="flex items-center justify-center">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className="w-6 h-6 appearance-none border-2 border-white rounded-full cursor-pointer checked:border-primary checked:bg-primary transition-all"
                />
            </div>
            <span className="text-white text-lg group-hover:text-primary transition-colors">
                {label}
            </span>
        </label>
    );
}

