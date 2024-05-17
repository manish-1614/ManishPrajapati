import React from 'react'
import { workExperiences } from '../data/workExperience'

const WorkExperience = () => {
  return (
    <div>
    <h1 className='text-4xl font-semibold py-2'>Work Experience</h1>
    {
        workExperiences.map((experience, index) => (
            <div key={index}
                className='p-4'>
                <h1 className='text-xl'>{experience.title}</h1>
                <p className='text-sm font-sans font-semibold text-slate-500'>{experience.company}</p>
                <p className='text-sm font-sans text-slate-500'>{experience.duration}</p>
                <ul className='list-disc ml-4'>
                    {experience.details.map((detail, index) => (
                        <li key={index} className='text-sm font-sans text-slate-500'>{detail}</li>
                    ))}
                </ul>
            </div>
        ))
    }
    </div>
  )
}

export default WorkExperience