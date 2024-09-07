import React from 'react'
import WorkingSkills from '../Components/ResumeComponents/WorkingSkills'
import Knowledges from '../Components/ResumeComponents/Knowledges'
import Experiences from '../Components/Utilities/Experiences'
import EducationList from '../Components/Utilities/EducationList'

const Resume = () => {
  return (
    <div className='my-border w-full h-full'>
      <header>
        <p>Resume</p>
        <div></div>
      </header>

      {/* Experiences and Education  */}
      <div className='grid gap-2 grid-cols-2'>
        <Experiences/>
        <EducationList/>
      </div>

      <div className='grid gap-2 grid-cols-2'>
        <WorkingSkills/>
        <Knowledges/>
      </div>
    </div>
  )
}

export default Resume