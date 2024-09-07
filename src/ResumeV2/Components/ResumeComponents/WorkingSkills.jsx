import React from 'react'
import ReactStars from "react-rating-stars-component";
import { ratedSkills } from '../../data/skills'

const WorkingSkills = () => {
  return (
    <div className='my-border h-full'>
      <header>
        <p>Working Skills</p>
      </header>
      <div>
        {
          ratedSkills.map((element, index) => (
            <div key={index} className='flex justify-between items-center'>
              <p>{element.skill}</p>
              <ReactStars
                count={5}
                value={element.rating}
                size={26}
                isHalf={true}
                edit={false}
                color={"rgba(59, 234, 170, 0.275)"}
                activeColor={"#CFAB08"}
                />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WorkingSkills