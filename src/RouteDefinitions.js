import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './ResumeV2/Pages/HeroSection';
import About from './ResumeV2/Pages/About';
import LandingPage from './ResumeV1/Pages/LandingPage'
import Resume from './ResumeV2/Pages/Resume';
import Blogs from './ResumeV2/Pages/Blogs';
import ContactMe from './ResumeV2/Pages/ContactMe';
import Portfolio from './ResumeV2/Pages/Portfolio';
import DateUtility from './ResumeV2/Pages/DateUtility';


function RouteDefinitions() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} >
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contactme' element={<ContactMe/>} />
      </Route>
      
      <Route path="v2/" element={<LandingPage/>} />
      <Route path="utility" element={<DateUtility/>} />
    </Routes>
  );
}

export default RouteDefinitions;