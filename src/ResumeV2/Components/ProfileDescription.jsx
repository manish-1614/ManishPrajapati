import React from 'react'
import RunningText from './Utilities/RunningText'
import './ProfileDescription.css'

const ProfileDescription = () => {
  return (
    <div className='w-11/12 px-4 mx-auto h-full flex lg:flex-row-reverse gap-4 flex-col lg:items-center   justify-center'>
      <div className='relative'>
        <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1716021959/codehelpDir/Portfolio_DP_pfucmh.png' 
        className='rounded-full w-[60%]' alt='display hero' />
        <div className='bottomBlur'></div>
        <div className='wobble1'></div>
        <div className='wobble2'></div>
      </div>  

      <div className='w-[70%]'>
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-roboto'>I am a <RunningText text={"Software Developer"}/></p>
          <div className='flex flex-col gap-2 font-roboto font-normal text-lg'>
            <p>As an experienced software engineer with over 7 years in the CRM domain, I have developed a proven track record of delivering high-quality, innovative solutions. In my role as a lead developer, I have been responsible for the full software development lifecycle, from requirements gathering and technical design to performance optimization and rigorous testing.</p>

            <p>Beyond my individual contributions, I have also taken on a mentorship role, providing guidance and support to new team members. I firmly believe in the importance of knowledge sharing and collaboration to drive team success and individual growth.</p>

            <p>My technical expertise extends beyond traditional software engineering, as I am adept at leveraging state-of-the-art AI tools to streamline development processes and optimize resource utilization. By staying current with the latest technologies and methodologies, I consistently deliver solutions that drive tangible business value.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDescription