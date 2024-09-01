import React from 'react'
import './HeroSection.css'
import SidePanel from './SidePanel'
import {navlinks} from '../data/navlinks'
import { Outlet} from 'react-router-dom'
import NavLinkBar from './NavLinkBar'

const HeroSection = () => {
  console.log(navlinks);
  return (
   
    <div className='relative w-full h-full'>
      <div className='w-11/12 m-10 mx-auto'>
        {/*upper section for space and links  */}
        <div className='relative w-full flex justify-between'>
          <p className='my-border mb-16 py-10 text-2xl font-robotoslab font-bold'>Manish Prajapati</p>
          <div className='absolute right-[20%] bottom-0 flex gap-4 border-2 border-pink-700 p-2 rounded-lg'>
            {
              navlinks.map((element) => (
                <NavLinkBar element={element} iconName={element.icon} 
                />
              ))
            }
          </div>
        </div>
        <div className='w-full flex'>
          <SidePanel/>
          <div className='h-[calc(100vh - 3.5rem)] flex-1 overflow-auto mx-auto mt-12'>
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