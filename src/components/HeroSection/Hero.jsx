import React from 'react'
import './Hero.css'
import { Heroleft } from './Heroleft'
import { HeroRight } from './HeroRight'

export const Hero = () => {
  return (
    <div className='Hero-main py-5 md:px-12 flex flex-col-reverse md:flex-row bg-[#444fff] px-15'>
      <Heroleft />
      <HeroRight />
    </div>
  )
}
