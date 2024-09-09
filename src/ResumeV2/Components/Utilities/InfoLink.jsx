import React from 'react'
import { links } from '../../data/links';
import SkillTab from './SkillTab';

const InfoLink = () => {
  return (
    <div className='my-border w-full h-full m-1'>
        {/* profile name  */}
        <p className='my-border bg-white opacity-75 text-lg'>Software Engineer / Problem Solver</p>

        {/* list of links to profile */}
        <div className='w-11/12 mx-auto'>
        {
          links.map((link, index) => (
            <div key={index} className='my-border'>
              <SkillTab text={link.text} url={link.url} iconName={link.iconName}/>
            </div>
          ))
        }
        </div>
        
        
    </div>
  )
}

export default InfoLink