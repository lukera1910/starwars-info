import React, { useState, useEffect } from 'react';
import FilmeItem from '../components/FilmeItem';

const FilmesPage = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const res = await fetch('https://swapi.dev/api/films/');
        const data = await res.json();

        const sortedFilmes = data.results.sort((a, b) => a.episode_id - b.episode_id);
        
        setFilmes(sortedFilmes);
      } catch (error) {
        console.error("Erro ao recuperar arquivos históricos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilmes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-400 font-mono p-4 md:p-10">
      
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          ARQUIVOS_HISTÓRICOS
        </h1>
        <p className="text-sm text-cyan-700 mt-2 uppercase">Linha do Tempo Galáctica</p>
      </header>

      {loading ? (
        <p className="text-center animate-pulse">Carregando Holocrons...</p>
      ) : (
        // container Relativo para segurar a linha central
        <div className="relative max-w-5xl mx-auto">
          
          {/* a linha central (vertical line) */}
          {/* o left-1/2 centraliza ela. O -translate-x-1/2 ajusta o pixel exato */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-cyan-900/50"></div>

          {/* lista de Filmes */}
          <div className="relative z-10">
            {filmes.map((filme, index) => (
              <FilmeItem key={filme.episode_id} data={filme} index={index} />
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default FilmesPage;