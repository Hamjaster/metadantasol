import React from 'react'
import './Vision.css'
import { Visionleft } from './Visionleft'
import {Visionright} from './Visionright'

export const Vision = () => {
  return (
    <div className=''>
        <div className='Heading' >Why US </div>
        <div className='Sections-Vision'>
            <div className='Vision-left'> <Visionleft  /></div> 
           <div className='Vision-Right' > <Visionright/></div> 
            </div>
            
    </div>
  )
}

