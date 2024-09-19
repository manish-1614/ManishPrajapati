import React from 'react'

const Porto = ({element}) => {
  return (
    <a href={element.url} target='_blank' rel='noreferrer' className='flex flex-col gap-2 text-xl'>
      <p>{element.topic}</p>
      <div className="border-t-[1px] border-richblack-200 py-2"></div>
      <div className='flex justify-between'>
        <p>{element.topic}</p>
        <p>{element.time}</p>
      </div>
      <div>
        <div className='text-lg text-richblack-700 underline'>
            {element.company}
        </div>
        <p className='text-lg font-bold'>
            {element.title}
        </p>
        <div>
            {element.description}
        </div>
      </div>
      
    </a>
  )
}

export default Porto