import React, { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa6";

export default function EarningsChart({ data = [] }) {
    const [filter, setFilter] = useState("Por mes");

    // Datos de ejemplo si no se proporcionan
    const defaultData = [
        { day: "L", value: 5, isHighlighted: false },
        { day: "K", value: 8, isHighlighted: false },
        { day: "M", value: 3, isHighlighted: false },
        { day: "J", value: 7, isHighlighted: false },
        { day: "V", value: 6, isHighlighted: false },
        { day: "S", value: 4, isHighlighted: false },
        { day: "D", value: 10, isHighlighted: true },
    ];

    const chartData = data.length > 0 ? data : defaultData;
    const maxValue = Math.max(...chartData.map((d) => d.value));

    return (
        <div className="px-4 mb-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">Ganancias</h3>
                <button
                    onClick={() => setFilter(filter === "Por mes" ? "Por semana" : "Por mes")}
                    className="bg-dark-input text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm"
                >
                    {filter}
                    <FaChevronDown className="text-xs" />
                </button>
            </div>

            <div className="bg-dark-input rounded-lg p-4">
                <div className="flex items-end justify-between gap-2 h-32 mb-2">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                            <div className="relative w-full flex flex-col items-center justify-end h-full">
                                <div
                                    className={`w-full rounded-t transition-all ${
                                        item.isHighlighted
                                            ? "bg-green-500"
                                            : "bg-primary"
                                    }`}
                                    style={{
                                        height: `${(item.value / maxValue) * 100}%`,
                                        minHeight: "8px",
                                    }}
                                >
                                    {item.isHighlighted && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <FaStar className="text-white text-sm" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className="text-white/60 text-xs mt-2">{item.day}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end gap-4 text-xs text-white/60">
                    <span>$10</span>
                    <span>$5</span>
                    <span>$0</span>
                </div>
            </div>
        </div>
    );
}

