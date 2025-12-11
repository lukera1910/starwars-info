import React from "react";

const Paginacao = ({ page, setPage, hasNext, hasPrev }) => {
    return (
        <div className="flex justify-center items-center gap-6 mt-10 select-none">
            <button
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={!hasPrev}
                className={`
                    px-4 py-2 border rounded-sm font-mono text-sm uppercase tracking-wider
                    transition-all duration-300
                    ${!hasPrev
                        ? 'border-cyan-900 text-cyan-900 cursor-not-allowed opacity-50'
                        : 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    }
                `}
            >
                &lt; Anterior
            </button>

            {/* indicador de página */}
            <div className="text-cyan-100 font-bold text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                Pg. {page}
            </div>

            {/* Botão PRÓXIMO */}
            <button
                onClick={() => setPage(old => old + 1)}
                disabled={!hasNext}
                className={`
                    px-4 py-2 border rounded-sm font-mono text-sm uppercase tracking-wider
                    transition-all duration-300
                    ${!hasNext
                        ? 'border-cyan-900 text-cyan-900 cursor-not-allowed opacity-50'
                        : 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    }
                `}
            >
                Próximo &gt;
            </button>
        </div>
    );
};

export default Paginacao;