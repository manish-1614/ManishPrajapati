import React from 'react'
import WorkingSkills from '../Components/ResumeComponents/WorkingSkills'
import Knowledges from '../Components/ResumeComponents/Knowledges'
import Experiences from '../Components/Utilities/Experiences'
import EducationList from '../Components/Utilities/EducationList'

const Resume = () => {
  return (
    <div>
      <div>
        <p className='heading'>Resume</p>
        <div className='underlining'></div>
      </div>

      {/* Experiences and Education  */}
      <div className='grid gap-2 lg:grid-cols-2 grid-cols-1'>
        <Experiences/>
        <EducationList/>
      </div>

      <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
        <WorkingSkills/>
        <Knowledges/>
      </div>
    </div>
  )
}

export default Resume