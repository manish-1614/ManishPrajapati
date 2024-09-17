import React from 'react'
import InfoLink from '../Components/Utilities/InfoLink'

const SidePanel = () => {
  return (
    <div className='flex flex-col h-[100vh] mt-10'>
        <div className='my-border relative mx-4 rounded-lg h-full w-11/12'>
          <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1716019318/codehelpDir/ProfilePic-removebg-preview_fn6p6z.ico' alt='profile pic'
            // className='w-[70%] aspect-square object-cover mx-auto absolute left-1/2 -translate-x-1/2 -top-20'
            className='w-[70%] aspect-square object-cover mx-auto my-border'
          />

          <div>
            {/* information sharing card  */}
            <InfoLink/>
          </div>
        </div>
        
    </div>
  )
}

export default SidePanel