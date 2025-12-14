import React from "react";

export default function ValidationList({ validations = [], className = "" }) {
    return (
        <ul className={`mt-6 space-y-2 text-sm text-text-muted ${className}`}>
            {validations.map((validation, index) => (
                <li key={index} className="flex items-center gap-2">
                    <span
                        className={
                            validation.isValid
                                ? "text-green-500"
                                : "text-gray-600"
                        }
                    >
                        ●
                    </span>
                    {validation.label}
                </li>
            ))}
        </ul>
    );
}

