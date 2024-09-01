import React from 'react'
import WorkingSkills from '../Components/ResumeComponents/WorkingSkills'
import Knowledges from '../Components/ResumeComponents/Knowledges'

const Resume = () => {
  return (
    <div className='my-border w-full h-full'>
      <header>
        <p>Resume</p>
        <div></div>
      </header>

      {/* Experiences and Education  */}
      <div className='grid gap-2 grid-cols-2'>
        <div className='my-border row-span-2'>
          <p>Experiences</p>
          <div className='my-border h-[80%] '>Amdocs</div>
        </div>

        <div className='my-border'>
          <p>Education</p>
          <div className='my-border h-32'>BIT Mesra, MCA</div>
          <div className='my-border h-32'>Gulbarga University, BCA</div>
        </div>
      </div>

      <div className='grid gap-2 grid-cols-2'>
        <WorkingSkills/>
        <Knowledges/>
      </div>
    </div>
  )
}

export default Resume