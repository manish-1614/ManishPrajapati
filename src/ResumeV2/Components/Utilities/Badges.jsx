import React from 'react'
import { badgesList } from '../../data/badgesList'

const Badges = () => {
  return (
    <div>

        <div>
            <p>Badges</p>
            <div className='flex flex-wrap gap-2'>
                {
                    badgesList.map((element, index) => (
                        <img src={element.imageUrl} alt={`${element.title}`} key={index} className='aspect-square w-20'/>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default Badges