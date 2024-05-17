import React from 'react'
import './DisplayName.css'

const DisplayName = () => {
  return (
    <div className='flex flex-col items-center py-4'>
        <div className='w-[60%] rounded-4xl py-1'>
            <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1715701264/codehelpDir/msns4zc7rlrcgwrlsggu.png' 
                alt='display profile'
                className='wobble rounded-full' />
        </div>

        <div className="w-full my-2 flex gap-1 flex-col items-center justify-center flex-wrap">
            <h1 className="lg:text-4xl text-xl font-bold text-teal-600 dark:text-teal-200">Manish Prajapati</h1>
            <p className="lg:text-md text-sm font-sans text-slate-500 dark:text-teal-400">Software Developer | Problem Solver</p>
        </div>
    </div>
  )
}

export default DisplayName