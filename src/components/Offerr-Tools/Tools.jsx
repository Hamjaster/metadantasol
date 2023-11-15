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

                <div className='text-5xl py-3 w-2/3 text-center font-bold text-[#136aff]'>
                    Our Expertise With Leading Business Intelligence Tools
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
            </div>
        )
    }
