import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <main>
          <section id="accueil" className="hero">
            <div className="hero__content">
              <h1 className="hero__title">Construis une image à la hauteur de ton talent </h1>
              <p className="hero__subtitle">L’agence de communication et de e-reputation pour les sportifs </p>
              <a href="#contact" className="hero__cta">Découvre l’agence </a>
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App; 