import React, { useState } from 'react';
import './Menu.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="menu__logo">
        <a href="/">PROPULSE</a>
      </div>
      
      <button 
        className={`menu__toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`menu__items ${isOpen ? 'open' : ''}`}>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#agence">L'agence</a></li>
        <li><a href="#process">Notre process</a></li>
        <li><a href="#realisations">Réalisations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu; 