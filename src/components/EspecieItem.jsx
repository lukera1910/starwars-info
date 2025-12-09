import React from "react";

const EspecieItem = ({ data }) => {
    return (
        // container da linha
        <li className="
            group
            flex items-center justify-between
            p-4 mb-3
            bg-slate-900/50
            border-l-4 border-transparent
            hover:border-cyan-400
            hover:bg-cyan-500/10
            transition-all duration-300
            cursor-pointer
            rounded-r-md
        ">

            {/* lado esquerdo: nome e ícone genérico */}
            <div className="flex items-center gap-4">
                {/* um avatar fake (círculo com inicial) */}
                <div className="
                     w-10 h-10 rounded-full
                     bg-cyan-900/30 border border-cyan-500/30
                     flex items-center justify-center
                     text-cyan-400 font-mono font-bold
                     group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                     transition-shadow
                ">
                    {data.name.charAt(0)}
                </div>

                <div>
                    <h3 className="text-cyan-300 font-bold text-lg tracking-wide group-hover:text-white transition-colors">
                        {data.name}
                    </h3>
                    <span className="text-xs text-cyan-600 uppercase tracking-widest">
                        Identificação de Espécie
                    </span>
                </div>
            </div>

            {/* lado direito: meta-dados rápidos */}
            <div className="hidden md:flex gap-8 tex-sm font-mono text-cyan-500/70">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase opacity-50">Classificação</span>
                    <span className="text-cyan-200">{data.classification}</span>
                </div>

                <div className="flex flex-col items-end w-24">
                    <span className="text-[10px] uppercase opacity-50">Linguagem</span>
                    <span className="capitalize text-cyan-200">{data.language}</span>
                </div>
            </div>
        </li>
    );
};

export default EspecieItem;