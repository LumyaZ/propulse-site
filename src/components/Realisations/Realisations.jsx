import React from 'react';
import './Realisations.scss';
import marwanImage from './../../assets/images/realisations/marwann_v2.jpg';
import kevinImage from './../../assets/images/realisations/vinke_4.jpg';
import vinkeVideo from './../../assets/images/realisations/vinke_v2.mp4';
const Realisations = () => {
  const projects = [
    {
      id: 1,
      name: "Marwan benhamou",
      role: "",
      description: "",
      image: marwanImage,
      isReversed: false,
      video: ""
    },
    {
      id: 2,
      name: "kevin dedji",  
      role: "",
      description: "",
      image: kevinImage,
      isReversed: true,
      video: vinkeVideo
    },
  ];

  return (
    <section id="realisations" className="realisations">
      <h2 className="realisations__title">Nos Réalisations</h2>
      <div className="realisations__container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`realisations__project ${project.isReversed ? 'reversed' : ''}`}
          >
            <div className="realisations__image-container">
              <img 
                src={project.image} 
                alt={project.name} 
                className="realisations__image"
              />
              
            </div>
            <div className="realisations__content">
              <h3 className="realisations__name">{project.name}</h3>
              <p className="realisations__role">{project.role}</p>
              <p className="realisations__description">{project.description}</p>
              <button className="realisations__button">En savoir plus</button>
              {project.video && (
                <video 
                  className="realisations__video"
                  controls
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realisations; 