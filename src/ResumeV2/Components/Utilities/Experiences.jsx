import React from 'react'
import { workExperiences } from '../../data/workExperience';

const Experiences = () => {
  return (
    <div>
      <div className='mt-2'>
        <p className='font-bold text-xl'>Experiences</p>
      </div>
      <div>
        {
          workExperiences.map((element, index) => (
            <div key={index}>
              <div className='flex items-center justify-between'> 
                <div className='mt-2'>
                  <p className='text-lg font-roboto'>{element.title}</p>
                  <p className='font-robotoslab'>{element.company}</p>
                </div>
                <div>
                  <p>{element.duration}</p>
                </div>
              </div>

              <ul className='list-disc'>
                {
                  element.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Experiences