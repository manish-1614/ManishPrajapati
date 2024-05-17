import React from 'react'
import AboutMe from '../Components/AboutMe'
import WorkExperience from '../Components/WorkExperience'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import DisplayName from '../Components/DisplayName'
import Contacts from '../Components/Contacts'
import Recognitions from '../Components/Recognitions'
// import Extras from '../Components/Extras'

const HeroSection = () => {

  return (
    <div className='lg:w-3/4 w-11/12 h-full lg:my-[1rem] my-[0.5rem] border-[1px] border-richblack-600 mx-auto rounded-2xl bg-richblack-700'>
        
        <div className='flex lg:flex-row flex-col gap-4'>
            {/* left side for personal information and links  */}
            <div className='lg:w-[30%] w-full '>
                <DisplayName/>

                {/* this is only a horizontal line  */}
                <div className='w-[90%] h-[1px] mx-auto bg-richblack-200'></div>

                {/* my links  */}
                <Contacts/>

                {/* this is only a horizontal line  */}
                <div className='w-[90%] h-[1px] mx-auto bg-richblack-200'></div>

                {/* my skills  */}
                <Skills/>

                {/* this is only a horizontal line  */}
                <div className='w-[90%] h-[1px] mx-auto bg-richblack-200'></div>

                {/* my extra information  */}
                {/* <Extras/> */}
                
            </div>

            {/* vertical bar  */}
            <div className='w-[1px] border-[1px] border-r-richblack-400'></div>

            {/* right side for detailed information  */}
            <div className='w-[80%] p-4 flex flex-col gap-4'>
                <AboutMe/>
                <WorkExperience/>
                <Education/>
                <Recognitions/>
            </div>
        </div>

    </div>
  )
}

export default HeroSection