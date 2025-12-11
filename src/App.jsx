import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import PlanetasLista from './pages/PlanetasLista';
import NavesPage from './pages/NavesPage';
import PessoasPage from './pages/PessoasPage';
import EspeciePage from './pages/EspeciePage';
import FilmesPage from './pages/FilmesPage';
import VeiculosPage from './pages/VeiculosPage';

function App() {
    return (
        <div className='bg-slate-950 min-h-screen text-cyan-400 font-mono selection:bg-cyan-900 selection:text-white'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/planetas' element={<PlanetasLista />} />
                    <Route path='/naves' element={<NavesPage />} />
                    <Route path='/pessoas' element={<PessoasPage />} />
                    <Route path='/especies' element={<EspeciePage />} />
                    <Route path='/filmes' element={<FilmesPage />} />
                    <Route path='/veiculos' element={<VeiculosPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;