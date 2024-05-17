import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    

  return (
    <div className='w-11/12 flex items-center justify-between py-4 mx-auto'>
        <div>
            <p>Manish Prajapati</p>
        </div>
        <div className='flex gap-4'>
            <p onClick={() => navigate('/ManishPrajapati/v2/About')}>Works</p>
            <p>About</p>
            <p>Resume</p>
        </div>
    </div>
  )
}

export default Navbar