import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
      <div className="process__slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          className="process__swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="process__step">
                <div className="process__step-number">{step.number}</div>
                <div className="process__step-text">{step.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Process; 