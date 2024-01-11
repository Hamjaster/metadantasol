import React from 'react'
import img from '../images/banner4.jpg'
import FadeUp from '../components/FadeUp'
import one from '../images/one.mp4'
import two from '../images/two.mp4'
import three from '../images/three.mp4'
import four from '../images/four.mp4'
import { useDisclosure } from '@chakra-ui/react'
import ServiceModal from '../components/ServiceModal'
import { useState } from 'react'
import { Tools } from '../components/Offerr-Tools/Tools'
import YouBusiness from '../components/YouBusiness'

export default function Services() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [service, setService] = useState()

    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,131,232,0.1), rgba(0,131,232,0.4)), url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }} className="banner flex justify-center items-center text-white text-4xl sm:text-5xl font-bold h-96 w-full uppercase">

                <div className="text ">
                    What we do ?
                </div>
            </div>

            <div className="text w-11/12 sm:w-11/12 mx-auto text-lg sm:text-2xl my-20 leading-normal sm:leading-loose text-center italic ">
                Our services in Business Intelligence, Data Visualization, Data Science, and Custom Software Development are designed to align with your organization's data maturiy. We begin with a thourough assessment to understand your business and address specific requests, ensuring a personalized and effective solution.
            </div>

            {/* Services */}
            <div className="px-16 grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#e2f1ff] py-12">
                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8 ">

                        <video autoPlay loop muted className='object-cover w-full h-[20rem]'>
                            <source className='w-full' src={one} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>01.</div> */}
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Engineering : Unlocking the Power of Data Engineering</div>
                            <div className=" w-full text-start text-sm md:text-lg text-gray-600">
                                In today's digital landscape, data has become the lifeblood of organizations, driving decision-making, strategic planning, and operational excellence. Yet, the raw data generated within a company is often complex, scattered, and untamed, making it challenging to extract valuable insights. This is where Data Engineering steps in, serving as the unsung hero behind the scenes.
                            </div>
                            <div onClick={() => { setService("data-engineering"); onOpen() }} className="button cursor-pointer px-8 py-2 transition-all text-black bg-white hover:bg-gray-100">Read More</div>
                        </div>
                    </div>
                }
                >

                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8">

                        <video autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={two} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>02.</div> */}
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Analysis: Unraveling the Power of Data</div>
                            <div className=" w-full text-start text-sm md:text-lg text-gray-600">
                                Data Analysis is the transformative process of delving deep into your data to reveal concealed insights, trends, and patterns. It's the key to unlocking the wealth of information hidden within your organization's data reports. In today's data-driven world, Data Analysis is your compass for making informed decisions, setting strategic direction, and realizing untapped potential.
                            </div>
                            <div onClick={() => { setService("data-analysis"); onOpen() }} className="button cursor-pointer px-8 py-2 transition-all text-black bg-white hover:bg-gray-100">Read More</div>
                        </div>
                    </div>

                }
                >

                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-2 py-8  flex flex-col lg:flex-col justify-between space-y-8 ">

                        <video autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={three} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>03.</div> */}
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Data Science: Unleashing the Power of Insights</div>
                            <div className=" w-full text-start text-sm md:text-lg text-gray-600">
                                Data Science is the scientific art of uncovering profound insights from diverse data sources. This multidisciplinary field marries various methods, algorithms, and systems to extract knowledge that fuels innovation and informed decision-making. A pivotal element in this process is Machine Learning (ML), which enhances optimization and operational efficiency.
                            </div>
                            <div onClick={() => { setService("data-science"); onOpen() }} className="button cursor-pointer px-8 py-2 transition-all text-black bg-white hover:bg-gray-100">Read More</div>
                        </div>
                    </div>
                }>


                </FadeUp>

                <FadeUp component={
                    <div
                        className="service mx-2 py-8 flex flex-col lg:flex-col justify-between space-y-8">

                        <video autoPlay loop muted className='h-[20rem] object-cover w-full'>
                            <source className='w-full' src={four} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="content w-full flex flex-col items-start justify-evenly space-y-3">

                            {/* <div className='w-full text-[#0083e8] text-start text-2xl font-extrabold'>04.</div> */}
                            <div className=" w-full text-start text-2xl md:text-3xl font-bold">Custom Software solutions: Bespoke Solutions for Business Excellence</div>
                            <div className=" w-full text-start text-sm md:text-lg text-gray-600">
                                At MetaDatAnSol Solutions, we also specialize in developing custom software solutions designed to meet your organization's unique complexities and challenges. Whether you require simple or bespoke applications or tailor-made software, our team is equipped to cater to your specific business needs.
                            </div>
                            <div onClick={() => { setService("custom-software"); onOpen() }} className="button cursor-pointer px-8 py-2 transition-all text-black bg-white hover:bg-gray-100">Read More</div>
                        </div>
                    </div>
                }>

                </FadeUp>

            </div>

            <Tools />
            <YouBusiness />
            {/* Service Modal */}
            <ServiceModal service={service} onClose={onClose} isOpen={isOpen} />
        </div>
    )
}
