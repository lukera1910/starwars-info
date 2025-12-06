import React from "react";

// recebemos a prop 'data' que contém as info do planeta
const CardItem = ({ data }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100">
            {/* cabeçalho do card (futuramente pode ser uma imagem) */}
            <div className="bg-blue-600 h-24 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold tracking-wide">{data.name}</h3>
            </div>

            <div className="p-6">
                <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-semibold text-gray-800">Clima:</span>
                        <span className="capitalize">{data.climate}</span>
                    </p>
                    <p className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="font-semibold text-gray-800">Terreno:</span>
                        <span className="capitalize truncate w-1/2 text-right">{data.terrain}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-semibold text-gray-800">População:</span>
                        <span>{data.population}</span>
                    </p>
                </div>
            </div>

            {/* botão fake (por enquanto) */}
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                Ver Detalhes
            </button>
        </div>
    );
};

export default CardItem;