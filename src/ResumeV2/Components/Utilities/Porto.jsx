import React from 'react'

const Porto = ({element}) => {
  return (
    <div className='flex flex-col gap-2 text-xl'>
      <p>{element.topic}</p>
      <div className="border-t-[1px] border-richblack-200 py-2"></div>
      <div className='flex justify-between'>
        <p>{element.topic}</p>
        <p>{element.time}</p>
      </div>
      <div>
        <div className='text-lg font-bold'>
            {element.company}
        </div>
        <div>
            {element.title}
        </div>
        <div>
            {element.description}
        </div>
      </div>
      
    </div>
  )
}

export default Porto