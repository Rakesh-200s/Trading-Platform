import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import OppenAccount from '../OpenAccount';
import Navbar from '../NavBar';
import Footer from '../Footer';

function HomePg() {
  return (
    <>
    
    <Hero />
    <Awards />
    <Stats/>
    <Pricing />
    <Education />
    <OppenAccount/>
   

    </>
    );
}

export default HomePg;