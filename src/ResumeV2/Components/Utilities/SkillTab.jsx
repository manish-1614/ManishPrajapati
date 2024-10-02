import React from 'react'
import IconRenderer from './IconRenderer';

const SkillTab = ({text, url, iconName}) => {

  return (
    <a href={url} className='flex gap-2 items-center'>
        <div>
          <IconRenderer iconPath={iconName}/>
        </div>
        <p className='text-sm font-sans text-slate-500'>{text}</p>
    </a>
  )
}

export default SkillTab