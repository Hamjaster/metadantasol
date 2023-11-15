import React from 'react'
import { Slider } from './Slider';
import './Testmonials.css'
import img from '../../images/testimonials.webp'


export const Testmonilas = () => {
  return (
    <>
      <div style={{
        background: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }} className='Testmonials py-20 space-y-12 pb-36'>

        <h2 >
          <center className='text-6xl py-3 text-white font-bold'>What our clients say ? </center>
        </h2>

        <div className="Testmonials-slider" >
          {/* <center> */}
          <Slider />
          {/* </center> */}
        </div>

      </div>



    </>
  )
}
