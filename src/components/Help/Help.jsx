import React from 'react'
import './Help.css'
import one from '../../images/bg4.jpg'
import two from '../../images/bg5.jpg'
import three from '../../images/bg6.jpg'


export const Help = () => {
  return (
    <div className='Help-Main'>
      <center>

        <div className=''>
          <div className='font-bold text-3xl text-[#0083e8] heading  md:text-5xl py-2'>
            Who Can we Assist ?
          </div>
          <div className='text-sm sm:text-lg mt-3 description text-gray-500'>
            Our expertise is tailored to assist businesses of all sizes in harnessing the power of their existing data. Whether you're just beginning to explore the possibilities of data or ready to implement effective structures for data processing and decision-making, we're here to guide you every step of the way.
          </div>
        </div>

        <div className='flex my-24 text-base lg:text-xl md:flex-row space-y-12 items-center md:space-y-0 flex-col'>

          <div className="w-full space-y-5 md:w-1/3 flex flex-col items-center">
            {/* <img src={one} className='w-64' alt="" srcset="" /> */}
            <div style={{ backgroundImage: `url(${one})` }} className="bg-center bg-cover rounded-lg shadow-xl hover:shadow-2xl transition-all h-44 w-64">

            </div>
            <strong className='text-3xl  py-1 heading'>Startups</strong>
            <p className='text-center font-thin text-gray-500 description h-[250px] w-10/12'>Our services are designed to empower startups in unlocking the full potential of data. We guide you on how to effectively gather, transform, and process data, enabling you to make well-informed decisions that steer your startup towards success.</p>
          </div>
          <div className="w-full space-y-5 md:w-1/3 flex flex-col items-center">
            {/* <img src={two} className='w-64' alt="" srcset="" /> */}
            <div style={{ backgroundImage: `url(${two})` }} className="bg-center bg-cover rounded-lg shadow-xl hover:shadow-2xl transition-all h-44 w-64">

            </div>
            <strong className='text-3xl py-1 heading'>SMB's</strong>
            <p className='text-center leading-snug font-thin text-gray-500 description h-[250px]  w-10/12'>Small and medium-sized businesses are brimming with potential, often limited only by the time needed for expansion. Our role is to help you overcome this barrier. Leveraging the power of AI, data science, analytics, and machine learning, we offer solutions that accelerate your business growth and expansion.</p>
          </div>
          <div className="w-full space-y-5 md:w-1/3 flex flex-col items-center">
            {/* <img src={three} className='w-80' alt="" srcset="" /> */}
            <div style={{ backgroundImage: `url(${three})` }} className="bg-center bg-cover rounded-lg shadow-xl hover:shadow-2xl transition-all h-44 w-64">

            </div>
            <strong className='text-3xl py-1 heading'>Large Enterprises</strong>
            <p className='text-center leading-snug font-thin text-gray-500 description h-[250px]  w-10/12'>For expansive organizations, complexity grows in tandem with size. Our dedicated focus involves optimizing your data strategy comprehensively. From enhancing business intelligence to deploying thorough data analytics, we refine processes to align with your enterprise's evolving demands, fostering continual growth and improvement</p>
          </div>

        </div>

      </center>
    </div>
  )
}
