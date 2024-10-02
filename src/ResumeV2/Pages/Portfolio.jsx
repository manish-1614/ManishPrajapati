import React from 'react'
import { portfolioList } from '../data/portfolioList'
import Porto from '../Components/Utilities/Porto'
import Badges from '../Components/Utilities/Badges'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { certificatesList } from '../data/certificates'

const Portfolio = () => {
  return (
    <div >
      <div>
        <h1 className='text-3xl font-bold'>Portfolio</h1>
        <div className='underlining'></div>
      </div>
      <div>
        <Badges/>
      </div>
      <div className='flex flex-wrap'>
        {
          portfolioList.map((element, index) => (

            <div key={index} className='my-border lg:w-[45%]'>
              <Porto element={element}/>
            </div>
          ))
        }
      </div>
      <div>
        <h1 className='heading'>Certificates</h1>
        <div className='underlining'></div>
        <PhotoProvider>
        <div className='flex flex-wrap gap-2'>
          {
            certificatesList.map((element, index) => (
              <div className='flex flex-col gap-4 justify-center text-center max-w-[200px]'>
                <PhotoView key={index} src={element.url}>
                  <img src={element.thumbnail} alt={element.title} className='hover:scale-110 duration-150' />
                </PhotoView>
                <p className='text-sm italic'>{element.title}</p>
              </div>
                
            ))
          }
        </div>
        </PhotoProvider>
      </div>
    </div>
  )
}

export default Portfolio