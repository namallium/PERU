import React from 'react';
import Carousel from '../components/UncontrolledCarousel';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Home = () => (
   <>
      <Carousel />

      <div className="homeText">
         <h3 className="homeTextH">
            Program Evaluation and Research Unit
         </h3 >
         <p className="homeTextP">
            PERU is dedicated to meaningful work that facilitates each patient or community member's ability to achieve optimal health, well-being, recovery and choice.
         </p>
      </div>

      <Section />

      <Footer />

   </>
);

export default Home;
