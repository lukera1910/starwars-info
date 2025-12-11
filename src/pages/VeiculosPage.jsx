import React, { useState, useEffect } from "react";
import TabelaVeiculos from "../components/TabelaVeiculos";
import Paginacao from "../components/Paginacao";

const VeiculosPage = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);

    // estado para controlar a página atual
    const [page, setPage] = useState(1);
    // estado para saber se tem próxima/anterior (para desabilitar botões)
    const [dataInfo, setDataInfo] = useState({ next: null, previous: null, count: 0 });

    useEffect(() => {
        const fetchVeiculos = async () => {
            setLoading(true) // recomeça o loading ao trocar de página
            try {
                const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
                const data = await res.json();

                setVeiculos(data.results);
                setDataInfo({
                    next: data.next,
                    previous: data.previous,
                    count: data.count
                });
            } catch (error) {
                console.error("Falha no transporte terrestre:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVeiculos();
    }, [page]);

    return (
        <div className="min-h-screen bg-slate-950 p-8 text-cyan-400 font-mono">
            <h1 className="text-4xl mb-2 font-bold tracking-widest text-center uppercase">
                Garagem Imperial
            </h1>
            <p className="text-center text-cyan-700 mb-8 text-sm">Veículos de Superfície e Atmosfera</p>

            {loading ? (
                <div className="flex justify-center h-64 items-center">
                    <span className="animate-pulse text-xl">Carregando diagramas...</span>
                </div>
            ) : (
                <>
                    <TabelaVeiculos veiculos={veiculos} />

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

export default VeiculosPage;