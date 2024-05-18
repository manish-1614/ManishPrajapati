import React from 'react'
import ProfileDescription from '../Components/ProfileDescription'
import NavigateToLinks from '../Components/NavigateToLinks'
import Navbar from '../Components/Navbar'

const HeroSection = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        {/* added negative margin because the content was automatically leaving alot of margin */}
        <div className='w-full'> 
            <ProfileDescription/>
            <NavigateToLinks/>
        </div>
    </div>
  )
}

export default HeroSection