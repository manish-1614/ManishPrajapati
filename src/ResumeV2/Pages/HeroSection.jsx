import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <p className='text-2xl p-4 font-semibold'>Who is the hero ? He is the Hero.</p>
        <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1715701264/codehelpDir/msns4zc7rlrcgwrlsggu.png' 
            alt="hero" 
            className="mx-auto"
        />
    </div>
  )
}

export default HeroSection