import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Agency from './components/Agency/Agency';
import Vision from './components/Vision/Vision';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <main>
          <section id="accueil" className="hero">
            <div className="hero__content">
              <h1 className="hero__title">Propulse</h1>
              <p className="hero__subtitle">Votre partenaire digital pour une présence en ligne exceptionnelle</p>
              <a href="#contact" className="hero__cta">Contactez-nous</a>
            </div>
          </section>
          <Agency />
          <Vision />
        </main>
      </div>
    </Router>
  );
}

export default App; 