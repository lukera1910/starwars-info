import React, { useState, useEffect } from 'react';
import PersonagemItem from '../components/PersonagemItem';
import Paginacao from '../components/Paginacao';

const PessoasPage = () => {
    const [pessoas, setPessoas] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [dataInfo, setDataInfo] = useState({ next: null, previous: null, count: 0 });

    useEffect(() => {
        const fetchPessoas = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
                const data = await res.json();

                setPessoas(data.results);
                setDataInfo({
                    next: data.next,
                    previous: data.previous,
                    count: data.count
                });
            } catch (error) {
                console.error("Erro na comunicação com a base rebelde:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPessoas();
    }, [page]);

    return (
        <div className='min-h-screen bg-slate-950 p-6 md:p-12 font-mono'>

            {/* cabeçalho da seção */}
            <header className='mb-10 border-b border-cyan-500/20 pb-4 flex justify-between items-end'>
                <div>
                    <h1 className='text-3xl md:text-4xl text-cyan-400 font-bold tracking-widest uppercase drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]'>
                        Pessoal
                    </h1>
                    <p className='text-cyan-700 text-sm mt-2'>
                        Registros de Cidadãos e Oficiais Imperiais
                    </p>
                </div>

                {/* um contador decorativo */}
                <div className='text-right hidden sm:block'>
                    <span className='block text-xs text-cyan-800 uppercase'>Status do Sistema</span>
                    <span className='text-green-500 text=sm animate-pulse'>• Conectado</span>
                </div>
            </header>

            {/* conteúdo */}
            {loading ? (
                <div className='flex flex-col items-center justify-center h-64 space-y-4'>
                    {/* loader temático simples */}
                    <div className='w-16 h-16 border-4 border-cyan-900 border-t-cyan-400 rounded-full animate-spin'></div>
                    <p className='text-cyan-600 animate-pulse'>Descriptografando dados...</p>
                </div>
            ) : (
                <>
                    <ul className='max-w-4xl mx-auto'>
                        {pessoas.map((pessoa) => (
                            <PersonagemItem key={pessoa.name} data={pessoa} />
                        ))}
                    </ul>
                
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
    );
};

export default PessoasPage;