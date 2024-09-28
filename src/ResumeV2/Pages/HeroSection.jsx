import React, { useEffect, useLayoutEffect, useState } from 'react'
import './HeroSection.css'
import SidePanel from './SidePanel'
import { Outlet, useNavigate} from 'react-router-dom'
import NavBar from './NavBar'
import HamburgerMeun from './HamburgerMeun'

const HeroSection = () => {

  let navigate = useNavigate();
  useEffect( () => {
    navigate('/about')
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect( () => {
    // Handler to call when the window is resized
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
   
    <div id="hero-section" className='relative'>
      <div className='m-10 mx-auto'>
        {/*upper section for space and links  */}
        <div id="navbar">
          <p id="my-name" className='text-center inline-block my-border p-10 text-2xl font-robotoslab font-bold'>Manish Prajapati</p>
          {
            width > 1080 && <NavBar/>
          }
          {
            width <= 1080 && <HamburgerMeun/>
          }
        </div>
        <div id="panels" className='flex'>
          <div id="side-panel">
            <SidePanel/>
          </div>
          <div id="outlet-panel" className='mt-10'>
              <div className='w-11/12 p-10'>
                  <Outlet/>
              </div>
          </div>
        </div>
        
      </div>
       

    </div>
  )
}

export default HeroSection