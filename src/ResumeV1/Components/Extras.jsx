import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'

const Extras = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Languages known</h1>
            <div className='flex flex-col gap-2'>
                <p>English</p>
                <ProgressBar completed={90} maxCompleted={100} isLabelVisible={false} bgColor='#0EA5E9'/>

                <p>Hindi</p>
                <ProgressBar completed={95} maxCompleted={100} isLabelVisible={false} bgColor='#0EA5E9'/>

            </div>
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <p className='text-2xl'>Touch Typist</p>
            <p className='text-lg text-richblack-200'>65 Words per minute  </p>
        </div>

    </div>
  )
}

export default Extras