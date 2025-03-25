import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Agency from './components/Agency/Agency';
import Vision from './components/Vision/Vision';
import VisionServices from './components/VisionServices/VisionServices';
import Team from './components/Team/Team';
import Process from './components/Process/Process';
import Realisations from './components/Realisations/Realisations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/main.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <main>
          <Hero />
          <Agency />
          <Vision />
          <VisionServices />
          <Team />
          <Process />
          <Realisations />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 