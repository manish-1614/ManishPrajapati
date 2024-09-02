import React from 'react'
import { portfolioList } from '../data/portfolioList'
import Porto from '../Components/Utilities/Porto'

const Portfolio = () => {
  return (
    <div className='flex flex-wrap'>

      {
        portfolioList.map((element, index) => (

          <div key={index} className='my-border w-[45%]'>
            <Porto element={element}/>
          </div>
        ))
      }
    </div>
  )
}

export default Portfolio