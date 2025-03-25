import React from 'react';
import './Agency.scss';

const Agency = () => {
  return (
    <section id="agence" className="agency">
      <div className="agency__content">
        <div className="agency__text">
          <h2 className="agency__title">L’agence Propulse</h2>
          <p className="agency__description">
            Nous sommes  une agence spécialisée en e-réputation et communication pour les sportifs. Nous savons qu’aujourd’hui, ta carrière ne dépend pas seulement de tes performances sur le terrain, mais aussi de l’image que tu renvoies à l’extérieur.

          </p>
          <a href="#process" className="agency__cta">Découvrir notre process</a>
        </div>
        <div className="agency__image">
          <img src="/images/agency.jpg" alt="Notre agence" />
        </div>
      </div>
    </section>
  );
};

export default Agency; 