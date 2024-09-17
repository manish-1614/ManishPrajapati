import React from 'react'
import { deedsList } from '../../data/deedsList'
import WhatIDoCard from './WhatIDoCard'
import './util.css'

const WhatDoIDo = () => {
  return (
    <div className='my-border  w-full h-full'>
      <header>What Do I do !</header>

      {/* make a grid of 4 elements */}
      <div className='grid lg:grid-cols-2 grid-rows-2 gap-2 justify-between sm:grid-cols-1 xs:grid-cols-1'>
        {
          deedsList.map((element, index) => (
            <div key={index} className='my-border h-52 relative overflow-hidden'>
              <WhatIDoCard title={element.title} imageUrl={element.imageUrl} description={element.description}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhatDoIDo