import React from "react";

const CardItem = ({ data }) => {
    return (
        <div className="
            group 
            relative 
            bg-slate-900/80 
            backdrop-blur-sm 
            rounded-sm 
            overflow-hidden 
            transition-all duration-300 
            cursor-pointer 
            border border-cyan-500/30
            hover:border-cyan-400
            hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
            hover:-translate-y-1
        ">
            
            {/* efeito de "scanline" decorativo no topo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

            {/* cabeçalho do card */}
            {/* troquei o bg-blue-600 por um slate mais escuro e sutil */}
            <div className="bg-slate-800/50 h-20 flex items-center justify-center border-b border-cyan-500/20">
                <h3 className="text-cyan-400 text-xl font-mono tracking-widest font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                    {data.name}
                </h3>
            </div>

            <div className="p-6">
                <div className="space-y-3 text-sm font-mono text-cyan-300/80">
                    
                    {/* item 1 */}
                    {/* troquei border-gray-100 por border-cyan-500/20 (muito mais sutil) */}
                    <p className="flex justify-between items-center border-b border-cyan-500/20 pb-2">
                        <span className="text-cyan-600 uppercase text-xs tracking-wider">Clima</span>
                        <span className="capitalize text-cyan-100">{data.climate}</span>
                    </p>
                    
                    {/* item 2 */}
                    <p className="flex justify-between items-center border-b border-cyan-500/20 pb-2">
                        <span className="text-cyan-600 uppercase text-xs tracking-wider">Terreno</span>
                        <span className="capitalize truncate w-1/2 text-right text-cyan-100">{data.terrain}</span>
                    </p>
                    
                    {/* item 3 */}
                    <p className="flex justify-between items-center pt-1">
                        <span className="text-cyan-600 uppercase text-xs tracking-wider">População</span>
                        <span className="text-cyan-100">{data.population}</span>
                    </p>
                </div>

                {/* botão estilo "outline" / holográfico */}
                {/* o botão sólido rouba muita atenção. o outline combina mais com terminal */}
                <button className="
                    mt-6 w-full py-2 px-4 rounded-sm
                    border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest
                    hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]
                    transition-all duration-300
                ">
                    Acessar Dados
                </button>
            </div>
        </div>
    );
};

export default CardItem;