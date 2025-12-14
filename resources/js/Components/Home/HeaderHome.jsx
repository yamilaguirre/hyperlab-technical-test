import React from "react";
import { FaUser } from "react-icons/fa6";

export default function HeaderHome({ balance = "$300" }) {
    return (
        <header className="flex items-center justify-between px-4 pt-2 pb-4">
            <button className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                <FaUser className="text-xl" />
            </button>
            <button className="bg-dark-input text-white px-4 py-2 rounded-lg font-medium">
                {balance}
            </button>
        </header>
    );
}

