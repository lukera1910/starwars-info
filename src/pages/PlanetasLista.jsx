import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import Paginacao from "../components/Paginacao";

const PlanetasLista = () => {
    const [planetas, setPlanetas] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [dataInfo, setDataInfo] = useState({ next: null, previous: null, count: 0 });

    useEffect(() => {
        const fetchPlanetas = async () => {
            setLoading(true);
            try {
                // 2. CORREÇÃO CRÍTICA: Adicionei o 'fetch' e a variável '${page}'
                const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
                
                // Dica: Sempre bom checar se a resposta foi ok
                if (!res.ok) throw new Error('Erro na requisição');

                const data = await res.json();

                // 3. CORREÇÃO DE ESTADO:
                // Guardamos apenas o array de resultados no estado 'planetas'
                setPlanetas(data.results);
                
                setDataInfo({
                    next: data.next,
                    previous: data.previous,
                    count: data.count
                });
            } catch (error) {
                console.error("Falha ao consultar planetas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanetas();
    }, [page]);

    return (
        <div className="min-h-screen bg-slate-950 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-cyan-500 mb-2">
                    Galáxia Far, Far Away
                </h1>
                <p className="text-center text-cyan-400 mb-10">
                    Catálogo oficial de planetas recuperado dos arquivos Jedi.
                </p>

                {loading ? (
                    <div className="flex justify-center h-64 items-center">
                        <span className="animate-pulse text-xl text-cyan-500 font-mono">Carregando dados da Galáxia...</span>
                    </div>
                ) : (
                    <>
                        {/* 4. Separei o Grid da Paginação */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* 5. CORREÇÃO FATAL: Mapeamos direto 'planetas', sem o .results */}
                            {planetas.map((planeta) => (
                                <CardItem
                                    key={planeta.name}
                                    data={planeta}
                                />
                            ))}
                        </div>

                        {/* A Paginação agora fica fora do Grid, ocupando a largura toda */}
                        <div className="mt-8">
                            <Paginacao
                                page={page}
                                setPage={setPage}
                                hasNext={!!dataInfo.next}
                                hasPrev={!!dataInfo.previous}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PlanetasLista;