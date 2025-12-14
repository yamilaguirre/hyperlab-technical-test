import React from "react";

export default function UserDescription({ description = "", onEdit }) {
    return (
        <div className="bg-dark-input rounded-lg p-4 mb-4 mx-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium text-sm">Descripción del Usuario</h3>
                {onEdit && (
                    <button
                        onClick={onEdit}
                        className="text-primary text-xs hover:text-primary-hover"
                    >
                        Editar
                    </button>
                )}
            </div>
            {description ? (
                <p className="text-white/80 text-sm">{description}</p>
            ) : (
                <p className="text-white/40 text-sm italic">No hay descripción</p>
            )}
        </div>
    );
}

