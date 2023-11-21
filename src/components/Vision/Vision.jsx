import React from 'react'
import './vision.css'
import { Visionleft } from './Visionleft'
import { Visionright } from './Visionright'

export const Vision = () => {
  return (
    <div className='my-56'>
      <div className='text-center font-bold text-6xl mb-2' >Why us ? </div>
      <div className='Sections-Vision mx-12 md:mx-32 flex flex-col-reverse md:flex-row '>
        <div className='Vision-left  w-full md:w-1/2'> <Visionleft /></div>
        <div className='Vision-Right  w-full md:w-1/2' > <Visionright /></div>
      </div>

    </div>
  )
}

