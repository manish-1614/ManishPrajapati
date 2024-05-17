import React from 'react'
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatedSkill = ({title, rating}) => {
  return (
    <div className='flex flex-col items-center'>
        <p className='text-sm'>{title}</p>
        <ReactStars 
            count={5}
            value={rating}
            size={26}
            edit={false}
            isHalf={true}
            emptyIcon={<FaStar/>}
            halfIcon={<FaStarHalfAlt/>}
            fullIcon={<FaStar/>}
            activeColor="#CFAB08"
        />
    </div>
  )
}

export default RatedSkill