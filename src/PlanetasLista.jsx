import React, { useState, useEffect } from "react";

function PlanetasLista() {
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
        return <h1 style={{ color: 'red' }}>Erro ao acessar a SWAPI: {error}</h1>
    }

    return (
        <div>
            <h1>Catálogo de Planetas</h1>
            <p>Total de itens: {data.count}</p>

            <h2>Estrutura dos dados (Raw JSON)</h2>
            <pre style={{ backgroundColor: '#eee', padding: '15px', borderRadius: '5px' }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default PlanetasLista;