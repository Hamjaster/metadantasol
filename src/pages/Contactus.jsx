import React from 'react'
import img from '../images/banner3.png'
import FadeUp from '../components/FadeUp'

function Contactus() {
    return (
        <div className=''>
            {/* <FadeUp
                component={ */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }} className="banner flex justify-center items-center text-white text-4xl sm:text-5xl font-bold h-96 w-full uppercase ">

                <div className="text space-y-3 flex flex-col items-center">
                    <div>
                        Contact Us
                    </div>
                    <div className="text-gray-400 text-center w-11/12 sm:w-full text-sm sm:text-base font-normal">
                        CONTACT US TO EXPLORE HOW WE CAN BENEFIT YOUR BUSINESS
                    </div>
                </div>
            </div>

            {/* }
            /> */}
            <FadeUp
                component={
                    <div className="text w-11/12 sm:w-11/12 mx-auto text-sm sm:text-lg mt-10 mb-20 text-center leading-relaxed">
                        At Metadatan Solutions, our mission is to empower businesses of all sizes to harness the full potential of their data. We specialize in a wide range of Business Intelligence and custom software solutions, enabling you to make informed decisions and implement data-driven strategies swiftly.
                        Our approach is built on a foundation of deep understanding—understanding your unique business needs and audience. By prioritizing this understanding, we ensure a seamless alignment between your objectives and our solutions. Whether you're a startup, a small or medium-sized business, or a large enterprise, we're here to help you transform data into actionable insights and drive your business forward.
                        Let's collaborate to unlock the power of your data. Get in touch with us today and embark on a data-driven journey towards success

                    </div>
                }
            />

        </div>
    )
}

export default Contactus
