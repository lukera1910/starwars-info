import React, { useState, useEffect } from 'react';
import TabelaNaves from '../components/TabelaNaves';

const NavesPage = () => {
    const [naves, setNaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNaves = async () => {
            try {
                const res = await fetch('https://swapi.dev/api/starships/');
                const data = await res.json();
                setNaves(data.results);
            } catch (error) {
                console.error("Deu ruim na hiperespaço:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNaves();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 p-8 text-cyan-400 font-mono">
            <h1 className="text-4xl mb-8 font-bold tracking-widest text-center">
                Hangar Principal
            </h1>

            {loading ? (
                <p className="text-center animate-pulse">Carregando diagramas...</p>
            ) : (
                <TabelaNaves naves={naves} />
            )}
        </div>
    );
};

export default NavesPage;