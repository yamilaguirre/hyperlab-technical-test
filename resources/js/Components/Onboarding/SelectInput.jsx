import React from "react";

export default function SelectInput({
    value,
    onChange,
    options = [],
    placeholder = "",
    icon: Icon = null,
    className = "",
    required = false,
    disabled = false,
}) {
    return (
        <div className="relative">
            <select
                value={value || ""}
                onChange={onChange}
                className={`w-full bg-dark-input text-white border-transparent rounded-lg py-4 pl-4 pr-12 focus:ring-primary focus:border-primary appearance-none ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                } ${className}`}
                required={required}
                disabled={disabled}
            >
                {placeholder && (
                    <option value="" disabled className="bg-dark-input text-white/50">
                        {placeholder}
                    </option>
                )}
                {options.map((option) => {
                    const optionValue =
                        typeof option === "string" ? option : option.value;
                    const optionLabel =
                        typeof option === "string" ? option : option.label;

                    return (
                        <option
                            key={optionValue}
                            value={optionValue}
                            className="bg-dark-input text-white"
                        >
                            {optionLabel}
                        </option>
                    );
                })}
            </select>
            {Icon && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Icon className="text-white/60 text-lg" />
                </div>
            )}
        </div>
    );
}

