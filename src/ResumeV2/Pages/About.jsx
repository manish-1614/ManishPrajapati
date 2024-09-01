import React from 'react'
import WhatDoIDo from '../Components/Utilities/WhatDoIDo'
import TechStack from '../Components/Utilities/TechStack'
// import Navbar from '../Components/Navbar';
// import ProfileDescription from '../Components/ProfileDescription';
// import NavigateToLinks from '../Components/NavigateToLinks';

const About = () => {
  return (
    <div className='my-border w-full h-full flex flex-col gap-4'>
        {/* Heading "About ----------" */}
        <div>
          <p>About</p>
          <div></div>
        </div>

        {/* description  */}
        <div>
          <p>
            I am a Software Developer
            As an experienced software engineer with over 7 years in the CRM domain, I have developed a proven track record of delivering high-quality, innovative solutions. In my role as a lead developer, I have been responsible for the full software development lifecycle, from requirements gathering and technical design to performance optimization and rigorous testing.
            Beyond my individual contributions, I have also taken on a mentorship role, providing guidance and support to new team members. I firmly believe in the importance of knowledge sharing and collaboration to drive team success and individual growth.
            My technical expertise extends beyond traditional software engineering, as I am adept at leveraging state-of-the-art AI tools to streamline development processes and optimize resource utilization. By staying current with the latest technologies and methodologies, I consistently deliver solutions that drive tangible business value.
          </p>
        </div>

        <WhatDoIDo/>
        
        <TechStack/>
    </div>
  )
}

export default About