import React from 'react'
import { skillChips } from '../../data/skills'

const Knowledges = () => {
  return (
    <div className='my-border h-full'>
      <header>
        <p>Knowledges</p>
      </header>
      <div className='flex flex-wrap gap-1'>
        {
          skillChips.map((element, index) => (
            <div key={index} className='my-border'>
              <p>{element}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Knowledges