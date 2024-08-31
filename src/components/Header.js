import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoHenry from '../assets/logo-henry.png'; // Importar desde la raíz de public

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(200);

    useEffect(() => {
        const handleScroll = () => {
            const newHeight = window.scrollY > 0 ? 50 : 200;
            setHeaderHeight(newHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${headerHeight === 50 ? 'scrolled' : ''}`}>
            <img src={logoHenry} alt="Logo Henry" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/"><button>HOME</button></Link></li>
                    <li><Link to="/history"><button>Nuestra Historia</button></Link></li>
                    <li><Link to="/menu"><button>Menú</button></Link></li>
                    <li><Link to="/team"><button>Equipo</button></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;