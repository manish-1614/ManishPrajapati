import React, { useEffect } from 'react'
import './HeroSection.css'
import SidePanel from './SidePanel'
import {navlinks} from '../data/navlinks'
import { Outlet, useNavigate} from 'react-router-dom'
import NavLinkBar from './NavLinkBar'

const HeroSection = () => {

  let navigate = useNavigate();
  useEffect( () => {
    navigate('/about')
  }, []);
  console.log(navlinks);
  return (
   
    <div id="hero-section" className='relative w-full h-full'>
      <div className='m-10 mx-auto'>
        {/*upper section for space and links  */}
        <div id="navbar" className='relative flex justify-around'>
          <p id="my-name" className='my-border py-10 text-2xl font-robotoslab font-bold'>Manish Prajapati</p>
          <div id="all-nav-links" className='flex gap-4 border-2 border-pink-700 p-2 rounded-lg max-h-[100px] min-h-[80px]'>
            {
              navlinks.map((element) => (
                <NavLinkBar element={element} iconName={element.icon} 
                />
              ))
            }
          </div>
        </div>
        <div id="panels" className='w-full flex'>
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