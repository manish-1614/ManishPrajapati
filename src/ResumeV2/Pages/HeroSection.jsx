import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileDescription from '../Components/ProfileDescription'
import NavigateToLinks from '../Components/NavigateToLinks'

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