import React from 'react'
import * as Icons from 'react-icons/ai'

const SkillTab = ({text, url, iconName}) => {

    const Icon = Icons[iconName];

  return (
    <a href={url} className='flex gap-2'>
        <Icon/>
        <p className='text-sm font-sans text-slate-500'>{text}</p>
    </a>
  )
}

export default SkillTab