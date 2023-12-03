import React from 'react'
import service from '../images/banner2.jpg'
import FadeUp from '../components/FadeUp'
import one from '../images/bg1.jpg'
import two from '../images/bg2.jpg'
import three from '../images/bg3.jpg'
import four from '../images/bg4.jpg'

export default function Services() {


    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${service})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }} className="banner flex justify-center items-center text-white text-5xl font-bold h-96 w-full uppercase">

                <div className="text">
                    What we do ?
                </div>
            </div>

            <div className="text w-2/3 mx-auto text-xl my-20 leading-loose text-center italic ">
                At Metadatan Solutions, we bring over a decade of unwavering dedication to the BI and analytics sector, and we've embarked on a mission to leverage our extensive experience to support your journey to success. Our core mission revolves around empowering your management with the essential BI tools, ensuring a seamless voyage toward data-driven decision-making
            </div>

            {/* Services */}
            <div className="flex flex-col bg-[#e2f1ff] py-24">
                <FadeUp component={
                    <div
                        className="service mx-24 py-20 md:border-b-2 border-[#abcbea] flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10">

                        <div style={{
                            backgroundImage: `url(${one})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className='  h-[30rem] md:h-[28rem]  lg:h-[22rem]  w-full' src="" alt="" srcset="" />

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>01.</div>
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Engineering – Unlocking the Power of Data Engineering</div>
                            <div className=" w-full text-start text-sm md:text-base text-gray-600">
                                In today's digital landscape, data has become the lifeblood of organizations, driving decision-making, strategic planning, and operational excellence. Yet, the raw data generated within a company is often complex, scattered, and untamed, making it challenging to extract valuable insights. This is where Data Engineering steps in, serving as the unsung hero behind the scenes.
                            </div>
                            <div className="button cursor-pointer px-12 py-2 transition-all border-[#0083e8] border-[1px] text-[#0083e8] hover:bg-[#0083e8] hover:text-white">Read More</div>
                        </div>
                    </div>
                }
                >

                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-24 py-20 md:border-b-2 border-[#abcbea] flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10">

                        <div style={{
                            backgroundImage: `url(${two})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className=' h-[30rem] md:h-[28rem]  lg:h-[22rem]  w-full' src="" alt="" srcset="" />

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>02.</div>
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Analysis: Unraveling the Power of Data</div>
                            <div className=" w-full text-start text-sm md:text-base text-gray-600">
                                Data Analysis is the transformative process of delving deep into your data to reveal concealed insights, trends, and patterns. It's the key to unlocking the wealth of information hidden within your organization's data reports. In today's data-driven world, Data Analysis is your compass for making informed decisions, setting strategic direction, and realizing untapped potential.
                            </div>
                            <div className="button cursor-pointer px-12 py-2 transition-all border-[#0083e8] border-[1px] text-[#0083e8] hover:bg-[#0083e8] hover:text-white">Read More</div>
                        </div>
                    </div>

                }
                >

                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-24 py-20 md:border-b-2 border-[#abcbea] flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10">

                        <div style={{
                            backgroundImage: `url(${three})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className=' h-[30rem] md:h-[28rem]  lg:h-[22rem]  w-full' src="" alt="" srcset="" />

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>03.</div>
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Science: Unleashing the Power of Insights</div>
                            <div className=" w-full text-start text-sm md:text-base text-gray-600">
                                Data Science is the scientific art of uncovering profound insights from diverse data sources. This multidisciplinary field marries various methods, algorithms, and systems to extract knowledge that fuels innovation and informed decision-making. A pivotal element in this process is Machine Learning (ML), which enhances optimization and operational efficiency.
                            </div>
                            <div className="button cursor-pointer px-12 py-2 transition-all border-[#0083e8] border-[1px] text-[#0083e8] hover:bg-[#0083e8] hover:text-white">Read More</div>
                        </div>
                    </div>
                }>


                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-24 py-20 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10">

                        <div style={{
                            backgroundImage: `url(${four})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className=' h-[30rem] md:h-[28rem]  lg:h-[22rem]  w-full' src="" alt="" srcset="" />

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>04.</div>
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Custom Software solutions: Bespoke Solutions for Business Excellence</div>
                            <div className=" w-full text-start text-sm md:text-base text-gray-600">
                                At Metadatan Solutions, we also specialize in developing custom software solutions designed to meet your organization's unique complexities and challenges. Whether you require simple or bespoke applications or tailor-made software, our team is equipped to cater to your specific business needs.
                            </div>
                            <div className="button cursor-pointer px-12 py-2 transition-all border-[#0083e8] border-[1px] text-[#0083e8] hover:bg-[#0083e8] hover:text-white">Read More</div>
                        </div>
                    </div>
                }>

                </FadeUp>

            </div>

        </div>
    )
}
