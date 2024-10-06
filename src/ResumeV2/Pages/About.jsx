import React from 'react'
import WhatDoIDo from '../Components/Utilities/WhatDoIDo'
import TechStack from '../Components/Utilities/TechStack'
import './HeroSection.css'
// import Navbar from '../Components/Navbar';
// import ProfileDescription from '../Components/ProfileDescription';
// import NavigateToLinks from '../Components/NavigateToLinks';

const About = () => {
  return (
    <div className='flex flex-col gap-4 overflow-x-hidden'>
        {/* Heading "About ----------" */}
        <div>
          <p className='heading'>About</p>
          <div className='underlining'></div>
        </div>

        {/* description  */}
        <div>
          <p className='font-roboto text-justify'>
            I am a Software Developer with over 7 years of experience in the CRM domain, specializing in delivering high-quality, innovative solutions. As a lead developer, I manage the full software development lifecycle, from requirements gathering and design to performance optimization and testing. I also mentor junior team members, promoting collaboration and knowledge sharing to foster team success. With a strong technical background and proficiency in AI tools, I focus on streamlining processes and delivering solutions that create real business value.
          </p>
        </div>

        <WhatDoIDo/>
        
        <TechStack/>
    </div>
  )
}

export default About