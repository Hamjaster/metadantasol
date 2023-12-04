import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from 'react';

export default function YouBusiness() {
    const isSmall = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });

    useEffect(() => {
        console.log(isSmall)
    }, [isSmall])


    return (
        // <div className='bg-[[[#0083e8]]] text-[#0083e8]'>
        <div className="my-24 bg-gradient-to-t from-[#2da4ff] to-[#006dc1] bg-radial py-36">
            <div className="w-[95%] mx-auto">

                <h2 className="text-3xl md:text-4xl w-full mx-auto font-semibold text-center text-white mb-24 md:mb-44">
                    Data Maturity : Where Does Your Business Stand?
                </h2>

                <div className="flex lg:space-y-0 mx-1 flex-col lg:flex-row lg:space-x-2">


                    <div className="Bcard flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Discovering Data</h3>
                            <p className="text-gray-700 mb-4">
                                You have data but are unsure of its potential. This stage is all about uncovering the value and purpose of your business data."
                            </p>
                            <button className="bg-[#0083e8] text-white  py-2 px-2 w-full hover:bg-[#026cbd]">
                                Explore the Possibilities
                            </button>
                        </div>
                    </div>
                    {/* arrow */}
                    <div style={{ marginTop: isSmall ? "" : "150px" }} className="lg:block hidden arrow text-white text-6xl">
                        <GoArrowUpRight />
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-40px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Exploring Potential</h3>
                            <p className="text-gray-700 mb-4">
                                You're aware of your data's promise but need insights on harnessing it effectively. Here, the exploration of your data's power begins
                            </p>
                            <button className="bg-[#0083e8] text-white  py-2 px-2 w-full hover:bg-[#026cbd]">
                                Let Us Guide You
                            </button>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div style={{ marginTop: isSmall ? "" : "70px" }} className="lg:block hidden arrow text-white text-6xl">
                        <GoArrowUpRight />
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-80px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Data-Driven</h3>
                            <p className="text-gray-700 mb-4">
                                Enthusiastic about the prospects of data, you're ready to delve deep for impactful insights. You're set to fully utilize your data's capabilities
                            </p>
                            <button className="bg-[#0083e8] text-white py-2 px-2 w-full hover:bg-[#026cbd]">
                                Let's Explore Your Data’
                            </button>
                        </div>
                    </div>
                    {/* Arrow */}
                    <div style={{ marginTop: isSmall ? "" : "20px" }} className="lg:block hidden arrow text-white text-6xl">
                        <GoArrowUpRight />
                    </div>

                    <div style={{
                        marginTop: isSmall ? "" : '-120px'
                    }} className=" Bcard   flex flex-col lg:w-1/4 mb-4 lg:mb-0">

                        <div className="bg-white rounded-md shadow-lg p-4 space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Data Mastery</h3>
                            <p className="text-gray-700 mb-4">
                                Actively using data for insights, you seek ways to further elevate its utility. Your focus is on optimizing and advancing your data strategies
                            </p>
                            <button className="bg-[#0083e8] text-white text-sm py-2 px-1 w-full hover:bg-[#026cbd]">
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
