import React from 'react';
import './Agency.scss';
import image1 from '../../assets/images/agency/valentin-kremer-noqQBb1EKkc-unsplash.jpg';
import image2 from '../../assets/images/agency/tom-briskey-HM3WZ4B1gvM-unsplash.jpg';
import image3 from '../../assets/images/agency/pexels-maumascaro-1311616.jpg';
import image4 from '../../assets/images/agency/nima-sarram-1Ci19KBSs4M-unsplash.jpg';
import image5 from '../../assets/images/agency/logan-weaver-lgnwvr-jHJnzxXFxrw-unsplash.jpg';
import image6 from '../../assets/images/agency/jack-monach-5gcM189YA7o-unsplash.jpg';
import image7 from '../../assets/images/agency/ben-weber-r-krWscXjvQ-unsplash.jpg';
import image8 from '../../assets/images/agency/colin-lloyd-QyLJpC8rChY-unsplash.jpg'; 


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];

const Agency = () => {
  return (
    <section id="agence" className="agency">
      <div className="agency__content">
        <div className="agency__text">
          <h2 className="agency__title">L’agence Propulse</h2>
          <p className="agency__description">
            Nous sommes une agence spécialisée en e-réputation et communication pour les sportifs. Nous savons qu’aujourd’hui, ta carrière ne dépend pas seulement de tes performances sur le terrain, mais aussi de l’image que tu renvoies à l’extérieur.
          </p>
          <a href="#process" className="agency__cta">Découvrir notre process</a>
        </div>
        <div className="agency__image">
          <div className="agency__image-slider">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} className="agency__image-item" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency; 