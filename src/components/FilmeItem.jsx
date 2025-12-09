import React from "react";
import { toRoman } from '../utils/conversor';

const FilmeItem = ({ data, index }) => {
    // se o index for par, fica na esquerda, se for ímpar, direita
    const isEven = index % 2 === 0;

    return (
        <div className={`flex justify-between items-center w-full mb-8 ${isEven ? 'flex-row-reverse' : ''}`}>
            
            {/* lado vazio (para empurrar o card para o lado certo) */}
            <div className="hidden md:block w-5/12" />

            {/* o nó central (a bolinha na linha do topo) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 shadow=[0_0_10px_rgba(6,182,212,0.8)] z-10" />

            {/* o card do filme */}
            <div className="w-full md:w-5/12">
                <div className="
                    bg-slate-900/80 backdrop-blur-sm
                    border border-cyan-500/30 p-6 rounded-sm
                    hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)]
                    transition-all duration-300 group
                ">

                    {/* cabeçalho do card */}
                    <div className="flex justify-between items-start mb-4 border-b border-cyan-500/20 pb-2">
                        <div>
                            <span className="text-cyan-600 text-xs font-mono uppercase tracking-widest">
                                Episódio {toRoman(data.episode_id)}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-cyan-100 mt-1 group-hover:text-yellow-400 transition-colors">
                                {data.title}
                            </h3>
                        </div>
                        <span className="text-xs text-cyan-500 font-mono border border-cyan-500/30 px-2 py-1 rounded">
                            {data.release_date.split('-')[0]} {/* só o ano */}
                        </span>
                    </div>

                    {/* o texto amarelo clássico (limitado a 3 linhas) */}
                    <p className="text-yellow-400/80 font-mono text-sm leading-relaxed line-clamp-3 mb-4 italic">
                        "{data.opening_crawl}"
                    </p>

                    {/* rodapé do card */}
                    <div className="flex justify-between items-center text-xs text-cyan-600 font-mono uppercase">
                        <span>Dir: {data.director}</span>
                        <button className="text-cyan-400 hover:text-white underline decoration-dashed">
                            Acessar Log
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmeItem;