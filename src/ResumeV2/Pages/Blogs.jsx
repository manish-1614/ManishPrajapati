import React from 'react'
import { blogList } from '../data/blogList'
import BlogCard from '../Components/Utilities/BlogCard'

const Blogs = () => {
  return (
    <div className='flex flex-wrap'>
        {
            blogList.map((element, index) => (
                <div key={index} className='my-border lg:w-[47%]'>
                    <BlogCard element={element}/>
                </div>
            ))
        }
    </div>
  )
}

export default Blogs