import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PlanetasLista from './pages/PlanetasLista';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PlanetasLista />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;