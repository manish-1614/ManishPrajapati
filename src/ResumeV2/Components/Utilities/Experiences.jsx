import React from 'react'
import { workExperiences } from '../../data/workExperience';

const Experiences = () => {
  return (
    <div className='my-border'>
      <div>
        <p>Experiences</p>
      </div>
      <div>
        {
          workExperiences.map((element, index) => (
            <div key={index}>
              <p>{element.title}</p>
              <p>{element.company}</p>
              <p>{element.duration}</p>
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