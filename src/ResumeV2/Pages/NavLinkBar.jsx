import React from 'react'
import * as Icons from 'react-icons/vsc'
import { NavLink, useNavigate } from 'react-router-dom'

const NavLinkBar = ({element, iconName}) => {

    const Icon = Icons[iconName]
    const navigate = useNavigate();


  return (
    
        // NavLink
        <NavLink
            to={element.path}
            onClick={() => navigate(element.path)}
        >
            <div className='flex items-center gap-2'>
                <Icon className='text-lg' />
                <span>{element.name}</span>
            </div>
        </NavLink>
    
    
  )
}

export default NavLinkBar