import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './ResumeV2/Pages/HeroSection';
import About from './ResumeV2/Pages/About';
import LandingPage from './ResumeV1/Pages/LandingPage'


function RouteDefinitions() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/About" element={<About />} />
      <Route path="v2/" element={<LandingPage/>} />
    </Routes>
  );
}

export default RouteDefinitions;