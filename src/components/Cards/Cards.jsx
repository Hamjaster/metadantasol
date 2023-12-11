import React from 'react'
import './Cards.css'
import one from '../../images/one.mp4'
import two from '../../images/two.mp4'
import three from '../../images/three.mp4'
import four from '../../images/four.mp4'
import ServiceModal from '../ServiceModal'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [service, setService] = useState()
  return (

    <div>
      <div className="wrapper bg-white mt-44 mb-10 py-3">

        <div className=" mx-auto w-full">
          <h1 className="title text-4xl sm:text-6xl font-bold w-full py-3 text-[#0083e8]">Our Solutions</h1>

          <p className=' mt-3 text-sm sm:text-lg text-gray-500 mx-7 sm:mx-24 text-center '>At Metadatan Solutions, we bring over a decade of unwavering dedication to the BI and analytics sector, and we've embarked on a mission to leverage our extensive experience to support your journey to success. Our core mission revolves around empowering your management with the essential BI tools, ensuring a seamless voyage toward data-driven decision-making.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-10/12 mx-auto gap-6 my-16 ">


            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#a3d7ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#1a87db] hover:text-[#1a87db] cursor-pointer transition-all duration-500">

              <div className="img relative overflow-hidden w-full h-72  ">
                <video
                  className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={one} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="name pt-3 text-black group-hover:text-white uppercase w-3/4 font-extrabold text-xl text-center">
                <div>Business Intelligence Solutions</div>
              </div>
              <div className="content font-normal text-center group-hover:text-white text-base mx-3">
                <ul>
                  <li>Data Strategy Assessment</li>
                  <li> Tailored Design Solutions </li>
                  <li> Seamless Data Migration </li>
                  <li> Comprehensive Reporting </li>
                  <li>System Integration</li>

                </ul>



              </div>

              <div onClick={() => { setService('business-intelligence'); onOpen() }} className="hover:underline  font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#a3d7ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#1a87db] hover:text-[#1a87db] cursor-pointer transition-all duration-500">

              <div className="img relative overflow-hidden w-full h-72  ">
                <video
                  className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={two} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="name pt-3 text-black group-hover:text-white uppercase w-3/4 font-extrabold text-xl text-center">
                <div>Data Visualization Services</div>
              </div>
              <div className="content font-normal text-center group-hover:text-white text-base mx-3">
                <ul>
                  <li> Report and Dashboard Development </li>
                  <li> Advanced Data Discovery </li>
                  {/* <li> Ad-hoc Reporting </li> */}
                  <li> Migration to New Reporting Tools </li>
                  <li> Cloud/On-Premise Deployment </li>
                  <li> Geospatial Visualization </li>
                  {/* <li> Predictive and Prescriptive Analytics </li> */}

                </ul>



              </div>

              <div onClick={() => { setService('data-analysis'); onOpen() }} className="hover:underline  font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#a3d7ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#1a87db] hover:text-[#1a87db] cursor-pointer transition-all duration-500">

              <div className="img relative overflow-hidden w-full h-72  ">
                <video
                  className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={three} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="name pt-3 text-black group-hover:text-white uppercase w-3/4 font-extrabold text-xl text-center">
                <div>Data Science</div>
              </div>
              <div className="content font-normal text-center group-hover:text-white text-base mx-3">
                <ul>
                  <li> Advanced Analytics </li>
                  <li>  Machine Learning and AI </li>
                  {/* <li>  Pilot Project Design </li> */}
                  <li>  Supply Chain Analytics </li>
                  <li>  Enhanced Customer Engagement </li>
                  <li>  Innovative Product Development </li>

                </ul>


              </div>

              <div onClick={() => { setService('data-science'); onOpen() }} className="hover:underline  font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#a3d7ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#1a87db] hover:text-[#1a87db] cursor-pointer transition-all duration-500">

              <div className="img relative overflow-hidden w-full h-72  ">
                <video
                  className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={four} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="name pt-3 text-black group-hover:text-white uppercase w-3/4 font-extrabold text-xl text-center">
                <div>Custom Software Development</div>
              </div>
              <div className="content font-normal text-center group-hover:text-white text-base mx-3">
                <ul>
                  <li> Process Automation </li>
                  <li> Fraud Detection </li>
                  <li> Personalized Data Analytics Tools </li>
                  <li> Custom CRM Systems </li>
                  <li> Seamless Integration </li>
                </ul>



              </div>

              <div onClick={() => { setService('custom-software'); onOpen() }} className="hover:underline  font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

          </div>




        </div>



      </div>

      <ServiceModal service={service} onClose={onClose} isOpen={isOpen} />
    </div>
  )
}
