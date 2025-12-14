import React from "react";

export default function TimeBreakdown({
    today = "$0",
    thisWeek = "$0",
    thisMonth = "$0",
}) {
    return (
        <div className="bg-dark-input rounded-lg p-4 mb-4 mx-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                    <p className="text-white text-lg font-bold mb-1">{today}</p>
                    <p className="text-white/60 text-xs">Hoy</p>
                </div>
                <div className="text-center">
                    <p className="text-white text-lg font-bold mb-1">{thisWeek}</p>
                    <p className="text-white/60 text-xs">Esta Semana</p>
                </div>
                <div className="text-center">
                    <p className="text-white text-lg font-bold mb-1">{thisMonth}</p>
                    <p className="text-white/60 text-xs">Este Mes</p>
                </div>
            </div>
        </div>
    );
}

