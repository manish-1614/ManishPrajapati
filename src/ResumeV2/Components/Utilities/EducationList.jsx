import React from 'react'
import { educations } from '../../data/education'

const EducationList = () => {
  return (
    <div>
      <header>
        <p className='font-bold text-xl underline'>Education</p>
      </header>
      <div className='grid gap-2'>
        {
          educations.map((element, index) => (
            <div key={index} className='my-border'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col'>
                <p className='font-roboto text-lg'>{element.name}</p>
                <p className='font-bold text-xl'>{element.course}</p>
              </div>
              <div className='flex flex-col items-end'>
                <p className='text-richblack-700 text-sm font-bold'>{element.duration}</p>
                <p>{element.score}</p>
              </div>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EducationList