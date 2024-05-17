import React from 'react'
import { recognitions } from '../data/recognitions'
import RenderLink from './Utilities/RenderLink'

const Recognitions = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold py-4'>Certificates and Recognitions</h1>
        <div>
            {
                recognitions.map((recognition, index) => (
                    <div key={index}
                        className='p-4'>
                        <h1 className='text-xl font-bold underline'>{recognition.topic}</h1>
                        <h2 className='text-lg font-semibold italic'>⦿ {recognition.title}</h2>
                        <h3 className='text-lg text-richblack-100 font-medium'>{recognition.company}</h3>
                        <h3 className='text-lg text-richblack-100 font-medium'>{recognition.time}</h3>
                        <RenderLink text={'goto url'} url={recognition.url} iconName={'AiOutlineLink'}/>
                        <p className='text-sm text-richblack-50'>
                            {recognition.description}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Recognitions