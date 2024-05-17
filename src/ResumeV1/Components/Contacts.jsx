import React from 'react'
import { links } from '../data/links'
import RenderSkill from './Utilities/RenderLink'

const Contacts = () => {
  return (
    <div className='p-4'>
        <p className='text-2xl font-semibold pb-2 text-center'>Contact</p>
        <div className='flex flex-col text-lg gap-2'>
        {
            links.map((link, index) => (
                <div key={index}>
                    <RenderSkill text={link.text} url={link.url} iconName={link.iconName}/>
                </div>      
            ))
        }
        </div>
    </div>
  )
}

export default Contacts