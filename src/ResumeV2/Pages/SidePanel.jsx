import React from 'react'
import InfoLink from '../Components/Utilities/InfoLink'

const SidePanel = () => {
  return (
    <div className='flex flex-col mt-10 justify-center items-center'>
        <div className='my-border relative mx-4 rounded-lg'>
          <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1716019318/codehelpDir/ProfilePic-removebg-preview_fn6p6z.ico' alt='profile pic'
            // className='w-[70%] aspect-square object-cover mx-auto absolute left-1/2 -translate-x-1/2 -top-20'
            className='w-[70%] aspect-square object-cover my-border mx-auto'
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