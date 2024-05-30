import React from 'react'
import Navbar from '../Components/Navbar';
import ProfileDescription from '../Components/ProfileDescription';
import NavigateToLinks from '../Components/NavigateToLinks';

const About = () => {
  return (
    <div className='w-full h-full bg-black'>
        <Navbar/>
        {/* added negative margin because the content was automatically leaving alot of margin */}
        <div className='w-full h-full'> 
            <ProfileDescription/>
            <NavigateToLinks/>
        </div>
    </div>
  )
}

export default About