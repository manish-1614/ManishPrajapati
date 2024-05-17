import React from 'react'
import { educations } from '../data/education'

const Education = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold py-4'>Education</h1>
        {
            educations.map((education, index) => (
                <div key={index}
                    className='p-4'>
                    <h1 className='text-xl'>{education.name}</h1>
                    <p className='text-sm font-sans font-semibold text-slate-500'>{education.course}</p>
                    <p className='text-sm font-sans text-slate-500'>{education.duration}</p>
                    <p className='text-sm font-sans text-slate-500'>{education.score}</p>
                    <ul className='list-disc ml-4'>
                        {education.work.map((work, index) => (
                            <li key={index} className='text-sm font-sans text-slate-500'>{work}</li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default Education