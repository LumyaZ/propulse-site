import React from 'react';
import './VisionServices.scss';

const VisionServices = () => {
  return (
    <section id="vision-services" className="vision-services">
      <div className="vision-services__vision">
        <h2 className="vision-services__title">Notre Vision</h2>
        <div className="vision-services__text">
          <p className="vision-services__paragraph">
            Construire des carrières, pas seulement des images
          </p>
          <p className="vision-services__paragraph">
            Chez Propulse, nous croyons que chaque sportif a un potentiel unique, bien au-delà de ce que l’on voit sur le terrain. Notre vision est simple : accompagner les talents à façonner leur image et leur réputation pour qu’elles soient le reflet de leur ambition, de leur travail acharné et de leur personnalité.
          </p>
          <p className="vision-services__paragraph">
            Nous ne nous contentons pas de gérer une image. Nous travaillons à faire émerger des histoires authentiques, des identités fortes et des réputations solides qui ouvrent des portes et créent des opportunités.
          </p>
        </div>
      </div>
      <div className="vision-services__services">
        <h2 className="vision-services__title">Nos Services</h2>
        <div className="vision-services__list">
          <div className="vision-services__item">
            <div className="vision-services__circle"></div>
            <div className="vision-services__content">
              <h3 className="vision-services__item-title">E-reputation</h3>
              <p className="vision-services__item-subtitle">
                Diagnostic rapide de la e-reputation pour le joueur
                Intervention pour sensibiliser à la e-reputation 
              </p>
            </div>
          </div>
          <div className="vision-services__item">
            <div className="vision-services__circle"></div>
            <div className="vision-services__content">
              <h3 className="vision-services__item-title">Communication</h3>
              <p className="vision-services__item-subtitle">Community management : créations de publications/ réels pour les joueurs </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionServices; 