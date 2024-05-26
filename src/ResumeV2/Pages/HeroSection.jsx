import React from 'react'
import './HeroSection.css'
import AiTools from './BentoBoxes/AiTools'
import TechStack from './BentoBoxes/TechStack'
import CurrentWork from './BentoBoxes/CurrentWork'
import Hero from './BentoBoxes/Hero'
import Skills from './BentoBoxes/Skills'
import Extras from './BentoBoxes/Extras'

const HeroSection = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-black text-richblack-5' 
          id='bento_box'>
        <div id='ai'>
          <AiTools/>
        </div>
        <div id="ts">
          <TechStack/>
        </div>
        <div id='work'>
          <CurrentWork/>
        </div>
        <div id='hero'>
          <Hero/>
        </div>
        <div id='skill'>
          <Skills/>
        </div>
        <div id='extra'>
          <Extras/>
        </div>
    </div>
  )
}

export default HeroSection