import React from 'react'
// import FaIcon from './FaIcon'

const BlogCard = ({element}) => {
    console.log(element.iconName)
  return (
    <div className='flex flex-col gap-2 text-xl'>
        <a href={element.url} target='_blank' rel='noreferrer'>
            {/* <FaIcon iconName={element.iconName} url={element.url}/> */}
            <p>{element.title}</p>
        </a>

        <div className='flex justify-between font-bold'>
            <p>{element.page}</p>
            <p>{element.time}</p>
        </div>
        
        <div>
            <p>{element.description}</p>
        </div>
        
    </div>
  )
}

export default BlogCard