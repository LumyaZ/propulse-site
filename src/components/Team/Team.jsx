import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ami',
      role: 'Directeur Créatif',
      image: '/images/team/ami_site_internet.png',
      objectPosition: 'center 0%'
    },
    {
      id: 2,
      name: 'Alexis',
      role: 'Designer UX/UI',
      image: '/images/team/alexis_site_internet.png'
    },
    {
      id: 3,
      name: 'Antoine',
      role: 'Développeur Frontend',
      image: '/images/team/antoine_site_internet.png',
      objectPosition: 'center 30%'
    },
    {
      id: 4,
      name: 'Axel',
      role: 'Développeur Backend',
      image: '/images/team/axel_site_internet.png',
      objectPosition: 'center 30%'
    },
    {
      id: 5,
      name: 'Jf',
      role: 'Chef de Projet',
      image: '/images/team/jf_site_internet.png'
    },
    {
      id: 6,
      name: 'Jules',
      role: 'Chef de Projet',
      image: '/images/team/jules_site_internet.png'
    }
  ];

  return (
    <section id="team" className="team">
      <h2 className="team__title">Notre Team</h2>
      <div className="team__slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
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
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team__member">
                <div className="team__image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ objectPosition: member.objectPosition || 'center' }}
                  />
                </div>
                <div className="team__info">
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team; 