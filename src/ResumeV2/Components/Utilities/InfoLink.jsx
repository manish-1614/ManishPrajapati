import React from 'react'
import { links } from '../../data/links';
import SkillTab from './SkillTab';

const InfoLink = () => {
  return (
    <div className='my-border w-full h-full m-1'>
        {/* profile name  */}
        <p className='border-2 rounded-md p-2 bg-richblack-25 opacity-75 text-sm font-bold mb-2'>Software Engineer / Problem Solver</p>

        {/* list of links to profile */}
        <div className='w-10/12 mx-auto flex flex-col gap-2 overflow-hidden'>
        {
          links.map((link, index) => (
            <div key={index} className='border-2 rounded-md p-2'>
              <SkillTab text={link.text} url={link.url} iconName={link.iconName}/>
            </div>
          ))
        }
        </div>
        
        
    </div>
  )
}

export default InfoLink