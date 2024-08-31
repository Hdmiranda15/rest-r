// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // Corrección: Importa HomePage sin .js
import HistoryPage from './pages/HistoryPage';
import MenuPage from './pages/MenuPage';
import TeamPage from './pages/TeamPage';

function App() {
    return (
        <Router>
            <div style={{ paddingTop: '200px' }}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/team" element={<TeamPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;