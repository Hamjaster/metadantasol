import React from 'react'
import './Tools.css'
import looker from '../../images/looker.png'
import powerbi from '../../images/powerBI.png'
import salesforce from '../../images/salesforce.png'
import table from '../../images/table.png'

export const Tools =
    () => {
        return (
            <div className='py-5 mt-28 mb-36 mx-auto text-center flex flex-col items-center'>

                <div className='text-3xl leading-loose sm:text-5xl py-3 w-11/12 sm:w-2/3 text-center font-bold text-[#136aff]'>
                    Let’s Tap Into The Potential Of Data &
                    Explore The Unexplored Vision
                </div>

                <div className='flex flex-row items-center gap-3 gap-x-5 justify-center flex-wrap w-11/12 py-20 mx-auto'>

                    <div className=" p-10  hover:shadow-2xl transition-shadow
 cursor-pointer shadow-xl rounded-xl">
                        <img src={looker} className='w-56' alt="" srcset="" />
                        <div className="glow"></div>
                    </div>

                    <div className=" p-10  hover:shadow-2xl transition-shadow
 cursor-pointer shadow-xl rounded-xl">
                        <img src={powerbi} className='w-56' alt="" srcset="" />
                        <div className="glow"></div>
                    </div>

                    <div className=" p-10  hover:shadow-2xl transition-shadow
 cursor-pointer shadow-xl rounded-xl">
                        <img src={salesforce} className='w-36' alt="" srcset="" />
                        <div className="glow"></div>
                    </div>

                    <div className=" p-10  hover:shadow-2xl transition-shadow
 cursor-pointer shadow-xl rounded-xl">
                        <img src={table} className='w-56' alt="" srcset="" />
                        <div className="glow"></div>
                    </div>


                </div>

                {/* <div className="mx-24 text-gray-600 leading-relaxed text-xl my-8">
                    In today's rapidly evolving digital landscape, having a forward-looking partner is crucial. We pride ourselves on being that visionary partner, wholeheartedly committed to facilitating organizations on their path to digital transformation.
                    As a next-gen global IT solutions provider, we specialize in assisting organizations in making data-driven decisions. Our expertise lies in crafting insightful reports, dynamic dashboards, and engaging data visualizations.
                    Beyond these core services, we extend our offerings to encompass data science, ML, AI, basic flows, applications for process automation as well as crafting custom software solutions tailored to address your complex business challenges.

                </div> */}

            </div>
        )
    }
