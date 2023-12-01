import React from 'react'
import './Cards.css'
import one from '../../images/one.mp4'
import two from '../../images/two.mp4'
import three from '../../images/three.mp4'
import four from '../../images/four.mp4'

export const Cards = () => {
  return (

    <div>
      <div className="wrapper bg-white my-20 py-12">

        <div className=" mx-auto w-full">
          <h1 className="title text-5xl sm:text-6xl font-bold w-full py-3 text-[#444fff]">Our Solutions</h1>

          <p className=' mt-3 text-lg text-gray-500 mx-7 sm:mx-24 '>At Metadatan Solutions, we bring over a decade of unwavering dedication to the BI and analytics sector, and we've embarked on a mission to leverage our extensive experience to support your journey to success. Our core mission revolves around empowering your management with the essential BI tools, ensuring a seamless voyage toward data-driven decision-making.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-10/12 mx-auto gap-6 my-16 ">


            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#cee0ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#444fff] hover:text-[#444fff] cursor-pointer transition-all duration-500">

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
                  <li>Assessment & Design</li>
                  <li> Enterprise Data Warehouse </li>
                  <li> Legacy Data and Report Migration </li>
                  <li> Reports, Dashboards, Metrics </li>
                  <li> Mobile BI </li>
                  <li> Integration with Existing Systems </li>
                </ul>



              </div>

              <div className="underline font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#cee0ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#444fff] hover:text-[#444fff] cursor-pointer transition-all duration-500">

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
                  <li> Ad-hoc Reporting </li>
                  <li> Migration to New Reporting Tools </li>
                  <li> Cloud/On-Premise Deployment </li>
                  <li> Geospatial Visualization </li>
                  <li> Predictive and Prescriptive Analytics </li>
                </ul>



              </div>

              <div className="underline font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#cee0ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#444fff] hover:text-[#444fff] cursor-pointer transition-all duration-500">

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
                  <li>  Pilot Project Design </li>
                  <li>  Supply Chain Analytics </li>
                  <li>  Enhanced Customer Engagement </li>
                  <li>  Innovative Product Development </li>
                </ul>


              </div>

              <div className="underline font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

            <div className="group pb-7 w-full mx-auto rounded-sm bg-[#cee0ff] text-[#57647c] flex flex-col space-y-4 items-center border-none hover:bg-[#444fff] hover:text-[#444fff] cursor-pointer transition-all duration-500">

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

              <div className="underline font py-2 font-bold  text-lg group-hover:text-white text-black">
                Read More +
              </div>

            </div>

          </div>




        </div>


        {/*----------------------------------------------------------------
    <div className="container">
    
      <div className="inner-wrapper">
        <div className="card">
          <div className="inner-card">
            <div className="img-wrapper">
              <img src="https://source.unsplash.com/collection/190727/900x600" alt=""/>
            </div>
            <div className="content">
              <h1>Card Title</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolore!</p>
            </div>
            <div className="btn-wrapper">
              <button className="view-btn" data-src="https://source.unsplash.com/collection/190727/900x600">View</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card">
            <div className="img-wrapper">
              <img src="https://source.unsplash.com/collection/190727/901x601" alt=""/>
            </div>
            <div className="content">
              <h1>Card Title</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolore!</p>
            </div>
            <div className="btn-wrapper">
              <button className="view-btn" data-src="https://source.unsplash.com/collection/190727/901x601">View</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card">
            <div className="img-wrapper">
              <img src="https://source.unsplash.com/collection/190727/903x603" alt=""/>
            </div>
            <div className="content">
              <h1>Card Title</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolore!</p>
            </div>
            <div className="btn-wrapper">
              <button className="view-btn" data-src="https://source.unsplash.com/collection/190727/903x603">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="light-box">
    <div className="box-wrapper">
      <div className="box">
        <span className="close-btn">&times</span>
        <img src="" alt="" className="light-img"/>
      </div>
    </div>
     ksjfkjsfjskfjksjfksjfksjfksjfksfkjskfsfksjfksjfkjsf*/}


      </div>


    </div>
  )
}
