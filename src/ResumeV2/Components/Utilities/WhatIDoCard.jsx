import React from 'react'
import './util.css'

const WhatIDoCard = ({title, imageUrl, description, width}) => {
  return (
    <div className='flex flex-col gap-2 text-xl px-2'>
        {
          width > 760 && 
          <img src={imageUrl} alt={`an illustration of ${description}`} className='-z-10 opacity-15 absolute top-0 left-0 right-0 bottom-0' />

        }
        <div className='text-sm font-sans text-slate-500'>
            <p className='text-2xl font-roboto'>{title}</p>
            <p className='text-lg font-light font-roboto'>{description}</p>
        </div>
    </div>
  )
}

export default WhatIDoCard