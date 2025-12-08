import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";

const PlanetasLista = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSWAPI = async () => {
            try {
                const url = 'https://swapi.dev/api/planets/';
                console.log(`Buscando dados em: ${url}`);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`A requisição falhou com status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSWAPI();
    }, []);

    if (isLoading) {
        return <h1>Carregando dados da Galáxia...</h1>;
    }

    if (error) {
        return <h1>Erro ao acessar a SWAPI: {error}</h1>
    }

    return (
        <div className="min-h-screen bg-slate-950 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-cyan-500 mb-2">
                    Galáxia Far, Far Away
                </h1>
                <p className="text-center text-cyan-400 mb-10">
                    Catálogo oficial de planetas recuperado dos arquivos Jedi.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.results.map((planeta) => (
                        <CardItem
                            key={planeta.name}
                            data={planeta}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanetasLista;