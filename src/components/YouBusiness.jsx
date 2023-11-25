import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function YouBusiness() {
    const isSmall = useMediaQuery({
        query: "(max-device-width: 1024px)",
    });

    return (
        // <div className='bg-[[[#136aff]]] text-[#136aff]'>
        <div className="my-24 bg-gradient-to-t from-[#5594ff] to-[#176cff] bg-radial py-36">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl w-11/12 mx-auto font-semibold text-center text-white mb-24 md:mb-44">
                    Data Maturity : Where Does Your Business Stand?
                </h2>

                <div className="flex space-y-16 mx-12 flex-col lg:flex-row lg:space-x-8">

                    <div className="Bcard flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Discovering Data</h3>
                            <p className="text-gray-700 mb-4">
                                You have data but are unsure of its potential. This stage is all about uncovering the value and purpose of your business data."
                            </p>
                            <button className="bg-[#136aff] text-white  py-2 px-4 w-11/12 hover:bg-blue-600">
                                Explore the Possibilities
                            </button>
                        </div>
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-40px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Exploring Potential</h3>
                            <p className="text-gray-700 mb-4">
                                You're aware of your data's promise but need insights on harnessing it effectively. Here, the exploration of your data's power begins
                            </p>
                            <button className="bg-[#136aff] text-white  py-2 px-4 w-11/12 hover:bg-blue-600">
                                Let Us Guide You
                            </button>
                        </div>
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-80px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Data-Driven</h3>
                            <p className="text-gray-700 mb-4">
                                Enthusiastic about the prospects of data, you're ready to delve deep for impactful insights. You're set to fully utilize your data's capabilities
                            </p>
                            <button className="bg-[#136aff] text-white  py-2 px-4 w-11/12 hover:bg-blue-600">
                                Let's Explore Your Data’
                            </button>
                        </div>
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-120px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Data Mastery</h3>
                            <p className="text-gray-700 mb-4">
                                Actively using data for insights, you seek ways to further elevate its utility. Your focus is on optimizing and advancing your data strategies
                            </p>
                            <button className="bg-[#136aff] text-white text-sm py-2 px-1 w-full hover:bg-blue-600">
                                Let's Optimize Your Data Strategy
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // </div>
    )
}
