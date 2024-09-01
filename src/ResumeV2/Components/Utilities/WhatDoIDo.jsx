import React from 'react'

const WhatDoIDo = () => {
  return (
    <div className='my-border  w-full h-full'>
      <header>What Do I do !</header>

      {/* make a grid of 4 elements */}
      <div className='grid grid-cols-2 grid-rows-2 gap-2 justify-between'>
        <div className='my-border h-52'>A</div>
        <div className='my-border h-52'>B</div>
        <div className='my-border h-52'>C</div>
        <div className='my-border h-52'>D</div>
      </div>
    </div>
  )
}

export default WhatDoIDo