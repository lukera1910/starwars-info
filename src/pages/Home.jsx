import React from "react";
import { Link } from "react-router-dom";

const categorias = [
    { titulo: 'Planetas', rota: '/planetas', icone: '🪐', desc: 'Dados cartográficos' },
    { titulo: 'Naves', rota: '/naves', icone: '🚀', desc: 'Veículos interestelares' },
    { titulo: 'Pessoas', rota: '/pessoas', icone: '👦🏻', desc: 'Perfis biológicos' },
    { titulo: 'Filmes', rota: '/filmes', icone: '🎬', desc: 'Registros históricos' },
    { titulo: 'Espécies', rota: '/especies', icone: '👽', desc: 'Taxonomia galáctica' },
    { titulo: 'Veículos', rota: '/veiculos', icone: '🚘', desc: 'Transporte terrestre' },
];

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <header className="text-center mb-12 border-b-2 border-cyan-500/30 pb-6 w-full max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    ARCHIVE_TERMINAL
                </h1>
                <p className="mt-4 text-cyan-200/70 text-sm uppercase tracking-[0.3em]">
                    Acesso Autorizado // Nível 5 // Banco de Dados Jedi Perdido
                </p>
            </header>

            {/* grid de navegação */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {categorias.map((cat) => (
                    <Link
                        key={cat.titulo}
                        to={cat.rota}
                        className="group relative bg-slate-900 border border-cyan-500/20 p-6 rounded-lg 
                                   hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] 
                                   transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex flex-col items-start">
                            <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                                {cat.icone}
                            </span>
                            <h2 className="text-2xl font-bold text-cyan-300 group-hover:text-white mb-1">
                                {cat.titulo}
                            </h2>
                            <p className="text-xs text-cyan-600 uppercase group-hover:text-cyan-400">
                                {cat.desc}
                            </p>

                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer className="mt-16 text-cyan-800 text-xs text-center">
                Conexão Segura Estabelecida • Protocolo SWAPI
            </footer>
        </div>
    );
}

export default Home;