import React from 'react'
import { skillChips } from '../../data/skills'

const Knowledges = () => {
  return (
    <div className='my-border h-full'>
      <header>
        <p className='font-bold underline mb-2'>Knowledges</p>
      </header>
      <div className='flex flex-wrap gap-1'>
        {
          skillChips.map((element, index) => (
            <div key={index} className='rounded-lg border-blue-100 border-[1px] px-2 my-[1px]'>
              <p>{element}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Knowledges