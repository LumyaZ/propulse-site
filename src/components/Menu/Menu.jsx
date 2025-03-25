import React, { useState, useEffect } from 'react';
import './Menu.scss';
import logo from '../../assets/images/logo_propulse.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('accueil').offsetHeight;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('.menu').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`menu ${scrolled ? 'menu--scrolled' : ''}`}>
      <div className="menu__logo">
        <a href="/">
          <img src={logo} alt="Propulse Logo" style={{ height: '40px' }} />
        </a>
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
        <li><a href="#accueil" onClick={(e) => handleLinkClick(e, 'accueil')}>Accueil</a></li>
        <li><a href="#agence" onClick={(e) => handleLinkClick(e, 'agence')}>L'agence</a></li>
        <li><a href="#process" onClick={(e) => handleLinkClick(e, 'process')}>Notre process</a></li>
        <li><a href="#realisations" onClick={(e) => handleLinkClick(e, 'realisations')}>Réalisations</a></li>
        <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu; 