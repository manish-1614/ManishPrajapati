import React from 'react'
import { skills, ratedSkills } from '../data/skills'
import RatedSkill from './Utilities/RatedSkill'
const Skills = () => {
  return (
    <div className='p-4'>
        <div>
            <p className='text-2xl font-semibold pb-2 text-center'>Skills</p>
            <div>
                {
                    ratedSkills.map((skill, index) => (
                        <div key={index}
                            className='flex justify-center pb-4'
                        >
                            <RatedSkill title={skill.skill} rating={skill.rating}/>
                        </div>
                    ))
                }
            </div>
        </div>

        <p className='text-2xl font-semibold pb-2 text-center'>Misc Skills</p>
        <div className='flex flex-wrap gap-2'>
            {
                skills.map((skill, index) => (
                    <div key={index}
                        className='text-sm font-sans text-slate-500 border-[1px] rounded-lg px-1 py-[0.1rem]'
                    >
                        {skill}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills