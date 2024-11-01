import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Ingreso from './components/Ingreso/Ingreso';
import Registro from './components/Ingreso/Registro';
import Lugares from './components/Lugares/Lugares';
import Diversion from './components/Diversion/Diversion';
import Restaurantes from './components/Restaurantes/Restaurantes';
import Nosotros from './components/Nosotros/Nosotros';
import logo from './components/imagenes/logoooo.png'; 
import Inicio from './components/Inicio/inicio';
import './App.css';


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div>
                {loading ? (
                    <div className="splash-screen">
                        <img src={logo} alt="Logo" className="./components/imagenes/bacana.png" /> 
                    </div>
                ) : (
                    <>
                        <div className="menu-icon" onClick={toggleMenu}>
                            &#9776;
                        </div>
                        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                            <Link to='/Ingreso'>Ingreso</Link>
                            <Link to='/Lugares'>Lugares</Link>
                            <Link to='/Restaurantes'>Restaurantes</Link>
                            <Link to='/Diversion'>Diversión</Link>
                            <Link to='/Nosotros'>Nosotros</Link>
                        </nav>
                        <Routes>
                            <Route path='/Ingreso' element={<Ingreso />} />
                            <Route path='/Registro' element={<Registro />} />
                            <Route path='/Lugares' element={<Lugares />} />
                            <Route path='/Restaurantes' element={<Restaurantes />} />
                            <Route path='/Diversion' element={<Diversion />} />
                            <Route path='/Nosotros' element={<Nosotros />} />
                            <Route path='/' element={<Navigate to="/Inicio" />} />
                            <Route path='/Inicio' element={<Inicio />} /> {/* Asegúrate de tener un componente de Inicio */}
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;




