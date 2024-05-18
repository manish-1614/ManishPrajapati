import React from 'react'
import HeroSection from '../Hero/HeroSection'
import Navbar from '../Navbar/Navbar'

const MainPage = () => {
  return (
    
    <div className="w-full h-full bg-richblack-900 text-richblack-5">
        <Navbar/>
        <div className="py-4">
            <HeroSection/>
        </div>
    </div> 
    
  )
}

export default MainPage