import React from "react";

export default function DateInput({
    value,
    onChange,
    max = null,
    min = null,
    className = "",
    required = false,
}) {
    return (
        <input
            type="date"
            value={value || ""}
            onChange={onChange}
            max={max}
            min={min}
            className={`w-full bg-dark-input text-white border-transparent rounded-lg py-4 px-4 focus:ring-primary focus:border-primary ${className}`}
            required={required}
        />
    );
}

