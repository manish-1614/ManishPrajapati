import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {    

  return (
    <div className='w-11/12 flex items-center justify-between py-4 mx-auto'>
        <div>
            <p>Manish Prajapati</p>
        </div>
        <div className='flex gap-4'>
            <Link to={'/'}>Work</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'https://drive.google.com/file/d/1pBi5ynbR0P2wVXUzov6wPL13OXO44roL/view?usp=drive_link'}
                target='_blank'
            >Resume</Link>
        </div>
    </div>
  )
}

export default Navbar