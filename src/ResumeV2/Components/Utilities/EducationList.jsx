import React from 'react'
import { educations } from '../../data/education'

const EducationList = () => {
  return (
    <div>
      <header>
        <p>Education</p>
      </header>
      <div className='grid gap-2'>
        {
          educations.map((element, index) => (
            <div key={index} className='my-border'>
              <p>{element.name}</p>
              <p>{element.course}</p>
              <p>{element.duration}</p>
              <p>{element.score}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EducationList