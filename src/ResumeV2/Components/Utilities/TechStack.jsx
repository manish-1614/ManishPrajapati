import React from 'react'
import { techStackIcons } from '../../data/skills'
import IconRenderer from './IconRenderer'

const TechStack = () => {
  return (
    <div className='my-border overflow-hidden'>
        <div className='flex flex-wrap *:text-4xl duration-150 gap-2'>
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