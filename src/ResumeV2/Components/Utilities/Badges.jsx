import React from 'react'
import { badgesList, affiliatedBadges } from '../../data/badgesList'

const Badges = () => {
  return (
    <div>

        <div>
            <div className='mt-6'>
                <p className='text-xl underline'>Affiliated Badges</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        affiliatedBadges.map((element, index) => (
                            <a href={element.url} target='_blank' rel='noreferrer' key={index} className='flex flex-col gap-1 justify-center items-center'>
                                <img src={element.imageUrl} alt={`${element.title}`} className='aspect-square w-20'/>
                                <p className='font-robotoslab text-sm'>{element.title}</p>
                                <p className='text-sm'>{element.date}</p>
                            </a>
                        ))
                    }   
                </div>
            </div>
            
            <div className='my-6'>
                <p className='text-xl underline'>Badges</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        badgesList.map((element, index) => (
                            <img src={element.imageUrl} alt={`${element.title}`} key={index} className='aspect-square w-20'/>
                        ))
                    }
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Badges