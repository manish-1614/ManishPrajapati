import React from 'react'
import { ratedSkills } from '../../data/skills'

const WorkingSkills = () => {
  return (
    <div className='my-border h-full'>
      <header>
        <p>Working Skills</p>
      </header>
      <div>
        {
          ratedSkills.map((element, index) => (
            <div key={index} className='my-border'>
              <p>{element.skill}</p>
              <p>{element.rating}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WorkingSkills