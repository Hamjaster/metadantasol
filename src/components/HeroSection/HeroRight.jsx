import React from 'react'
import img from './../../images/landing.png'
import videoBg from '../../images/video.mp4'

export const HeroRight = () => {
  return (
    <div className='Hero-right-main self-center sm:mt-12 md:mt-0'>
      <div>
        {/* <img src={img} width={'500px'} height={'500px'} /> */}
        <video className='w-full h-full object-cover' src={videoBg} autoPlay muted loop></video>
      </div>

    </div>
  )
}
