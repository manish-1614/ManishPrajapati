import { useState, useLayoutEffect } from 'react'
import React from 'react'
import { deedsList } from '../../data/deedsList'
import WhatIDoCard from './WhatIDoCard'
import './util.css'

const WhatDoIDo = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect( () => {
    // Handler to call when the window is resized
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className='lg:my-border'>
      <div className='heading'>What Do I do !</div>
      <div className='underlining'></div>

      {/* make a grid of 4 elements */}
      <div className='grid lg:grid-cols-2 grid-rows-2 gap-2 justify-between sm:grid-cols-1 xs:grid-cols-1'>
        {
          deedsList.map((element, index) => (
            <div key={index} className='border-2 my-2 rounded-lg relative overflow-hidden'>
              <WhatIDoCard title={element.title} imageUrl={element.imageUrl} description={element.description} width={width}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhatDoIDo