import React from "react";

export default function SubscriptionCostButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full mx-4 mb-4 bg-dark-input text-white py-3 px-4 rounded-lg font-medium hover:bg-dark-card transition-colors"
        >
            Costo Suscripciones
        </button>
    );
}

