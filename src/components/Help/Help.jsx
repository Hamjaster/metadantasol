import React from 'react'
import './Help.css'
import one from '../../images/startup-min.webp'
import two from '../../images/sm-min.webp'
import three from '../../images/three.webp'

export const Help = () => {
  return (
    <div className='Help-Main my-36'>
      <center>

        <div className='heading-text-help'>
          <div className='font-bold text-5xl py-2'>
            How Can we Help ?
          </div>
          <div className='text-lg mt-3 text-gray-500'>
            We can potentially help all kinds of businesses achieve their best with data science, regardless of the size of your business. Right from making businesses understand the potential of data to implementing the right structure to process it to make decisions.
          </div>
        </div>

        <div className='flex my-12 md:flex-row space-y-12 md:space-y-0 flex-col'>

          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img src={one} className='w-64' alt="" srcset="" />
            <strong className='text-3xl py-1'>Startups</strong>
            <p className='text-center font-thin text-gray-700 w-10/12'>We help startups grasp a hold on the potential of data, explaining to them how to collect data, transform it, and even process it to help you take informed decisions that can help you run your startup towards success</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img src={two} className='w-64' alt="" srcset="" />
            <strong className='text-3xl py-1'>SMBs</strong>
            <p className='text-center font-thin text-gray-700 w-10/12'>Small businesses have a lot of potential. The only restriction they might have is the time to expand. This is where we help you. With the potential of AI, data science, analytics and ML, we can help you speed up the expansion</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img src={three} className='w-80' alt="" srcset="" />
            <strong className='text-3xl py-1'>Large Enterprises</strong>
            <p className='text-center font-thin text-gray-700 w-10/12'>We help startups grasp a hold on the potential of data, explaining to them how to collect data, transform it, and even process it to help you take informed decisions that can help you run your startup towards success</p>
          </div>

        </div>

      </center>
    </div>
  )
}
