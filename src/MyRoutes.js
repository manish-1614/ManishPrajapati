import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './ResumeV2/Pages/HeroSection';
import About from './ResumeV2/Pages/About';
import LandingPage from './ResumeV1/Pages/LandingPage'


function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="v2/" element={<LandingPage/>} />
    </Routes>
  );
}

export default MyRoutes;