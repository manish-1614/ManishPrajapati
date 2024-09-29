import React from 'react'
// import FaIcon from './FaIcon'

const BlogCard = ({element}) => {
    console.log(element.iconName)
  return (
    <div className='flex flex-col gap-2 text-xl'>
        <a href={element.url} target='_blank' rel='noreferrer'>
            {/* <FaIcon iconName={element.iconName} url={element.url}/> */}
            <p className='text-lg font-bold'>{element.title}</p>
        </a>

        <div className='flex justify-between font-bold'>
            <p className='border-2 rounded-md px-1'>{element.page}</p>
            <p className='underline'>{element.time}</p>
        </div>
        
        <div>
            <p className='italic text-base'>{element.description}</p>
        </div>
        
    </div>
  )
}

export default BlogCard