import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import abigailImage from '../../assets/images/hero/abigail-keenan-8-s5QuUBtyM-unsplash.jpg';
const Hero = () => {
  return (
    <section id="accueil" className="hero" style={{ backgroundImage: `url(${abigailImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="hero__content">
        <h1 className="hero__title">Construis une image à la hauteur de ton talent </h1>
        <p className="hero__subtitle">L’agence de communication et de e-reputation pour les sportifs </p>
        <a href="#agence" className="hero__cta">Découvre l’agence</a>
      </div>
    </section>
  );
};

export default Hero; 