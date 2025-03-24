import React from 'react';
import './Agency.scss';

const Agency = () => {
  return (
    <section id="agence" className="agency">
      <div className="agency__content">
        <div className="agency__text">
          <h2 className="agency__title">L'agence</h2>
          <p className="agency__description">
            Propulse est une agence créative spécialisée dans la création de sites web modernes et performants. 
            Notre approche unique combine design innovant et technologies de pointe pour donner vie à vos projets digitaux.
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