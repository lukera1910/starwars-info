import React from 'react';

const TabelaNaves = ({ naves }) => {
  return (
    <div className="w-full overflow-x-auto border border-cyan-500/20 rounded-sm bg-slate-900/90 backdrop-blur">
      <table className="w-full text-left border-collapse">
        {/* cabeçalho da tabela */}
        <thead>
          <tr className="border-b border-cyan-500/50 bg-cyan-950/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <th className="p-4">Nome da Nave</th>
            <th className="p-4">Modelo</th>
            <th className="p-4 text-right">Custo ($)</th>
            <th className="p-4 text-center">Classe</th>
            <th className="p-4 text-right">Velocidade (MGLT)</th>
          </tr>
        </thead>
        
        {/* corpo da tabela */}
        <tbody className="text-cyan-100/80 font-mono text-sm">
          {naves.map((nave) => (
            <tr 
              key={nave.name}
              className="
                border-b border-cyan-500/10 
                hover:bg-cyan-500/10 
                transition-colors duration-200
                group
              "
            >
              <td className="p-4 font-bold text-cyan-300 group-hover:text-white transition-colors">
                {nave.name}
              </td>
              <td className="p-4 text-xs opacity-70">
                {nave.model}
              </td>
              <td className="p-4 text-right tabular-nums text-cyan-200">
                {nave.cost_in_credits === "unknown" ? "???" : nave.cost_in_credits}
              </td>
              <td className="p-4 text-center">
                <span className="px-2 py-1 text-[10px] border border-cyan-500/40 rounded bg-cyan-900/20 uppercase">
                  {nave.starship_class}
                </span>
              </td>
              <td className="p-4 text-right tabular-nums text-yellow-400/80">
                {nave.MGLT}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaNaves;