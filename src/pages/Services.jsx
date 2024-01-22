import React from 'react'
import img from '../images/banner4.jpg'
import img2 from '../images/banner6.jpg'
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

            <div div className="banner bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${img})` }}
            >

            </div >
            {/* What we od */}
            <div className="about shadow-2xl relative z-50 w-full md:w-11/12 mx-auto space-x-3 items-center md:-mt-32   bg-white px-12 sm:px-24 py-7 flex flex-col md:flex-col ">
                <div className="about flex flex-col md:flex-row items-center">

                    <div className=' md:w-1/4 py-4 md:py-24 text-center md:text-left capitalize font-bold text-4xl md:text-4xl'>What we do ?</div>
                    <div className=' md:w-3/4 text-center md:text-left text-[#0083e8] md:text-3xl text-2xl md:px-4 leading-relaxed md:leading-loose md:border-l-2 '>We turn data into decisions, offering tailored solutions in BI, Data Visualization, Data Science, and Custom Software Development to suit your unique needs.
                    </div>

                </div>
            </div>

            {/* Fixed BG */}
            {/* <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,131,232, 0.4), rgba(0,131,232, 0.9)), url(${img})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 px-5 sm:px-16 md:px-20 -mt-32 bg-scroll pt-44 sm:pt-56 pb-10 sm:pb-36 text-sm text-center sm:text-2xl xl:text-2xl text-gray-100">
                <FadeUp
                    component={
                        <>
                            Our clients benefit from our expertise in the domain of data and analytics. Analyzing loads of data is critical and we help our clients for better understanding the past events and predict the prospects entirely based on accurate data analysis. Our experienced professionals cater to the ever-growing data analytics needs of our clients, right from the planning stages to the transformation and execution stages. Also, we propose an optimal course of action so that the transformation process does not seem to be too overwhelming for our clients.
                        </>
                    }
                />
            </div> */}

            <div className="text w-11/12 sm:w-11/12 mx-auto text-lg sm:text-2xl my-20 leading-normal sm:leading-loose text-center italic ">
                Our services in Business Intelligence, Data Visualization, Data Science, and Custom Software Development are designed to align with your organization's data maturiy. We begin with a thourough assessment to understand your business and address specific requests, ensuring a personalized and effective solution.
            </div>

            {/* Services */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${img2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="px-16 grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#0d71bd] text-gray-200 py-12">
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
                            <div className=" w-full text-start text-sm md:text-lg text-gray-200">
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
                            <div className=" w-full text-start text-sm md:text-lg text-gray-200">
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
                            <div className=" w-full text-start text-sm md:text-lg text-gray-200">
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
                            <div className=" w-full text-start text-sm md:text-lg text-gray-200">
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
