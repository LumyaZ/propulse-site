import React from 'react';
import './Realisations.scss';

const Realisations = () => {
  const projects = [
    {
      id: 1,
      name: "Marwan benhamou",
      role: "Community management",
      description: "Création d'affiche avant match",
      image: "/images/realisations/marwan.jpg",
      isReversed: false
    },
    {
      id: 2,
      name: "John Doe",
      role: "Social Media Manager",
      description: "Gestion des réseaux sociaux et création de contenu",
      image: "/images/realisations/john.jpg",
      isReversed: true
    },
    // Vous pouvez facilement ajouter d'autres projets ici
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realisations; 