import React from 'react'
import {navlinks} from '../data/navlinks'
import NavLinkBar from '../Components/Utilities/NavLinkBar'

const NavBar = () => {
  return (
    <div className='absolute top-20 right-[10%]'>
      <div id="all-nav-links" className='flex gap-2 border-2 border-pink-700 p-2 rounded-lg max-h-[100px] min-h-[80px]'>
      {
          navlinks.map((element) => (
          <NavLinkBar element={element} iconName={element.icon} 
          />
          ))
      }
      </div>
    </div>
  )
}

export default NavBar