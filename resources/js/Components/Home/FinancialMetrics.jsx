import React from "react";

export default function FinancialMetrics({
    netEarnings = "$300",
    subscriptions = "1K",
    tips = "$189",
}) {
    return (
        <div className="grid grid-cols-3 gap-4 px-4 mb-4">
            <div>
                <p className="text-white/60 text-xs mb-1">Ganancias Netas</p>
                <p className="text-green-500 text-xl font-bold">{netEarnings}</p>
            </div>
            <div>
                <p className="text-white/60 text-xs mb-1">Suscripciones</p>
                <p className="text-white text-xl font-bold">{subscriptions}</p>
            </div>
            <div>
                <p className="text-white/60 text-xs mb-1">Propinas</p>
                <p className="text-white text-xl font-bold">{tips}</p>
            </div>
        </div>
    );
}

