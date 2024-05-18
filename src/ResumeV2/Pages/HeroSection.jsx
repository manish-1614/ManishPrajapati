import React from 'react'
import ProfileDescription from '../Components/ProfileDescription'
import NavigateToLinks from '../Components/NavigateToLinks'
import Navbar from '../Components/Navbar'

const HeroSection = () => {
  return (
    <div className='w-full h-full bg-white'>
        <Navbar/>
        <div>
            <ProfileDescription/>
            <NavigateToLinks/>
        </div>
    </div>
  )
}

export default HeroSection