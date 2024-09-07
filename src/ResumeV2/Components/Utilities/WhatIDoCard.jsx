import React from 'react'

const WhatIDoCard = ({title, imageUrl, description}) => {
  return (
    <div className='relative flex flex-col gap-2 text-xl'>
        <div className='text-sm font-sans text-slate-500'>
            <p>{title}</p>
            <img src='{imageUrl}' alt={`an illustration of ${description}`} className='absolute left-0 top-0 object-cover -z-10 opacity-25 w-full h-full' />
        </div>
        <p className='text-sm font-sans'>{description}</p>
    </div>
  )
}

export default WhatIDoCard