import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {    

  return (
    <div className='w-11/12 flex items-center justify-around py-4 mx-auto font-roboto font-normal'>
        <div>
            <p className='text-2xl font-roboto'><span className='font-robotoslab'>M</span>anish <span className='font-robotoslab'>P</span>rajapati</p>
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