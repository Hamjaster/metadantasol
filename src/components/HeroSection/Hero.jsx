import React from 'react'
import './Hero.css'
import { Heroleft } from './Heroleft'
import { HeroRight } from './HeroRight'
import videoBg from '../../images/video.mp4'

export const Hero = () => {
  return (
    <div className='relative '>

      <div className="video-container absolute h-full w-full  -z-10">
        <video className='w-full h-full absolute object-cover' src={videoBg} autoPlay muted loop></video>
        <div className={`overlay absolute top-0 left-0 w-full h-full bg-[#0a3d68]
        from-black
          to-transparent opacity-60`}></div>
      </div>


      <div className='Hero-main py-5 md:px-12  px-15'>
        <Heroleft />
      </div>
    </div>
  )
}
