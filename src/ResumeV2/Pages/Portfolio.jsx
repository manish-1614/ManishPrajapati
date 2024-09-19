import React from 'react'
import { portfolioList } from '../data/portfolioList'
import Porto from '../Components/Utilities/Porto'
import Badges from '../Components/Utilities/Badges'

const Portfolio = () => {
  return (
    <div >
      <div>
        <h1 className='text-3xl font-bold'>Portfolio</h1>
        <div className='underlining'></div>
      </div>
      <div>
        <Badges/>
      </div>
      <div className='flex flex-wrap'>
        {
          portfolioList.map((element, index) => (

            <div key={index} className='my-border w-[45%]'>
              <Porto element={element}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio