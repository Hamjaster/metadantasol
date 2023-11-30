import React from 'react'
import './Hero.css'
import { Heroleft } from './Heroleft'
import { HeroRight } from './HeroRight'
import videoBg from '../../images/video.mp4'

export const Hero = () => {
  return (
    <>

      <div className="video-container w-full h-screen absolute -z-10">
        <video className='w-full h-full absolute object-cover' src={videoBg} autoPlay muted loop></video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000dc0] to-transparent opacity-80"></div>
      </div>


      <div className='Hero-main py-5 md:px-12 flex flex-col-reverse md:flex-row px-15'>
        <Heroleft />
        {/* <HeroRight /> */}
      </div>
    </>
  )
}
