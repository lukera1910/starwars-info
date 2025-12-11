import React, { useState, useEffect } from 'react';
import TabelaNaves from '../components/TabelaNaves';
import Paginacao from '../components/Paginacao';

const NavesPage = () => {
    const [naves, setNaves] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [dataInfo, setDataInfo] = useState({ next: null, previous: null, count: 0 });

    useEffect(() => {
        const fetchNaves = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
                const data = await res.json();

                setNaves(data.results);
                setDataInfo({
                    next: data.next,
                    previous: data.previous,
                    count: data.count
                });
            } catch (error) {
                console.error("Deu ruim na hiperespaço:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNaves();
    }, [page]);

    return (
        <div className="min-h-screen bg-slate-950 p-8 text-cyan-400 font-mono">
            <h1 className="text-4xl mb-8 font-bold tracking-widest text-center">
                Hangar Principal
            </h1>

            {loading ? (
                <p className="text-center animate-pulse">Carregando diagramas...</p>
            ) : (
                <>
                    <TabelaNaves naves={naves} />

                    <Paginacao
                        page={page}
                        setPage={setPage}
                        hasNext={!!dataInfo.next}
                        hasPrev={!!dataInfo.previous}
                    />
                </>
            )}
        </div>
    );
};

export default NavesPage;