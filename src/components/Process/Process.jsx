import React from 'react';
import './Process.scss';

const Process = () => {
  const steps = [
    {
      number: '1',
      text: 'Prise de contact avec le joueur'
    },
    {
      number: '2',
      text: 'RDV stratégique'
    },
    {
      number: '3',
      text: 'Mise en place de la stratégie'
    },
    {
      number: '4',
      text: 'Ajustement du contenu'
    },
    {
      number: '5',
      text: 'Rendu des livrables'
    }
  ];

  return (
    <section id="process" className="process">
      <h2 className="process__title">Notre Process</h2>
      <div className="process__container">
        {steps.map((step, index) => (
          <div key={index} className="process__step">
            <div className="process__step-number">{step.number}</div>
            <div className="process__step-text">{step.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process; 