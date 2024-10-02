import React from 'react'
import WorkingSkills from '../Components/ResumeComponents/WorkingSkills'
import Knowledges from '../Components/ResumeComponents/Knowledges'
import Experiences from '../Components/Utilities/Experiences'
import EducationList from '../Components/Utilities/EducationList'

const Resume = () => {
  return (
    <div>
      <div className='flex lg:justify-start justify-center items-center mb-4'>
        <button className='px-2 py-1 rounded-lg bg-pink-500 text-white'>
          <a href="https://drive.google.com/file/d/1yWT_kDnkqgrehr7Q-rX4viIm2kGvW_dN/view?usp=drive_link" target='_blank' rel="noreferrer">
            Get the PDF
          </a>
        </button>
      </div>
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