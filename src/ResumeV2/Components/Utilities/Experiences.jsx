import React from 'react'
import { workExperiences } from '../../data/workExperience';

const Experiences = () => {
  return (
    <div>
      <div className='mt-2'>
        <p className='font-bold text-xl underline'>Experiences</p>
      </div>
      <div>
        {
          workExperiences.map((element, index) => (
            <div key={index}>
              <div className='flex flex-wrap items-center justify-between'> 
                <div className='mt-2'>
                  <p className='text-lg font-roboto'>{element.title}</p>
                  <p className='font-robotoslab px-2 border-2 rounded-md inline-block'>{element.company}</p>
                </div>
                <div>
                  <p className='text-richblack-700 font-bold text-sm'>{element.duration}</p>
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