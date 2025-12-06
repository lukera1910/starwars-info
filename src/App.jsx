import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import PlanetasLista from './pages/PlanetasLista';

function App() {
    return (
        <div className='bg-slate-950 min-h-screen text-cyan-400 font-mono selection:bg-cyan-900 selection:text-white'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/planetas' element={<PlanetasLista />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;