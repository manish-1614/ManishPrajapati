import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {navlinks} from '../data/navlinks'
import { NavLink } from 'react-router-dom'
import IconRenderer from '../Components/Utilities/IconRenderer'

const HamburgerMeun = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
            zIndex: '1000'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0'
        },
        bmMenu: {
            background: 'rgba(0, 0, 0, 0.9)',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            height: '100%',
            width: '100%'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        bmItem: {
            display: 'inline-block',
            margin: '10px 0'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            top: '0',
            left: '0'
        }
    };


  return (
    <div>
        <Menu
            isOpen={isOpen}
            onStateChange={handleStateChange}
            styles={styles}
        >
            
            {
                navlinks.map( (element) => (
                    <NavLink 
                        key = {element.id}
                        to={element.path}
                        onClick={closeMenu}
                        
                    >
                        <div className='text-richblack-100 hover:text-lg duration150 flex flex-row items-center gap-2'>
                            <IconRenderer iconPath={element.icon} />
                            <span>{element.name}</span>
                        </div>
                    </NavLink>
                ))
            }
        </Menu>
    </div>
  )
}

export default HamburgerMeun