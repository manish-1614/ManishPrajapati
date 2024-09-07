import React from 'react'
import { techStackIcons } from '../../data/skills'
import IconRenderer from './IconRenderer'

const TechStack = () => {
  return (
    <div className='relative my-border w-11/12 h-16 mx-auto'>
        <div className='text-4xl duration-150 flex gap-2'>
            {
              techStackIcons.map((element, index) => (
                <div key={index} className='hover:scale-125 duration-200 ease-linear'>
                  <IconRenderer iconPath={element} />
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default TechStack