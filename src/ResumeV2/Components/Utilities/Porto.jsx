import React from 'react'

const Porto = ({element}) => {
  return (
    <a href={element.url} target='_blank' rel='noreferrer' className='flex flex-col gap-2 text-xl'>
      <p>{element.topic}</p>
      <div className="border-t-[1px] border-richblack-200 py-2"></div>
      <div className='flex justify-between'>
        <p className='px-2 border-2 rounded-md'>{element.company}</p>
        <p>{element.time}</p>
      </div>
      <div>
        <p className='text-lg font-bold'>
            {element.title}
        </p>
        <p className='text-sm italic'>
            {element.description}
        </p>
      </div>
      
    </a>
  )
}

export default Porto