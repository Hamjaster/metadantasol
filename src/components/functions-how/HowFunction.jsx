import React from 'react'
import { useState, useEffect } from 'react'
import './HowFunction.css'
import { BsDatabaseFillGear, BsTranslate } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import { TbTransformFilled } from 'react-icons/tb'
import { SiThealgorithms } from 'react-icons/si'
import { FaLowVision } from 'react-icons/fa'
import { MdAutoGraph, MdOutlineAutoGraph } from 'react-icons/md'




export const HowFunction = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Add an event listener to detect screen width changes
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        // Initial check and set state
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='how-do-we-function py-12 space-y-12 bg-[#f7faff]'>
            <div className='mx-12 text-4xl md:text-5xl py-3 font-bold text-center'>
                How do we function ?
            </div>
            <div className='how-container'>

                <div className='function'>

                    <center>

                        <div className='icon w-24 bg-[#0083e8] rounded-full p-6'>
                            <div className="text-white text-5xl">
                                <BsDatabaseFillGear />
                            </div>

                        </div>

                        <div className='text-sm font-bold mt-3'>
                            1. COLLECTING <br />DATA
                        </div>
                    </center>

                </div>

                <div className='function lg:block hidden'>
                    <div className='icon-aroow'>
                        <center   >
                            <FaArrowRight style={{ color: '#0083e8' }} size={'50'} />
                        </center>
                    </div>
                </div>

                <div className='function'>

                    <center>

                        <div className='icon w-24 bg-[#0083e8] rounded-full p-6'>
                            <div className="text-white text-5xl">
                                <BsTranslate />
                            </div>

                        </div>

                        <div className='text-sm font-bold mt-3'>
                            2.  TRANSFORMING <br />DATA
                        </div>
                    </center>

                </div>

                <div className='function lg:block hidden'>

                    <div className='icon-aroow'>
                        <center   >
                            <FaArrowRight style={{ color: '#0083e8' }} size={'50'} />
                        </center>
                    </div>
                </div>

                <div className='function'>

                    <center>

                        <div className='icon w-24 bg-[#0083e8] rounded-full p-6'>
                            <div className="text-white text-5xl">
                                <FaLowVision />
                            </div>

                        </div>

                        <div className='text-sm font-bold mt-3'>
                            3. RUNNING ANALYTICS <br />ALGORITHMS
                        </div>
                    </center>

                </div>

                <div className='function lg:block hidden'>
                    <div className='icon-aroow'>
                        <center   >
                            <FaArrowRight style={{ color: '#0083e8' }} size={'50'} />
                        </center>
                    </div>
                </div>

                <div className='function'>

                    <center>

                        <div className='icon w-24 bg-[#0083e8] rounded-full p-6'>
                            <div className="text-white text-5xl">
                                <SiThealgorithms />
                            </div>

                        </div>

                        <div className='text-sm font-bold mt-3'>
                            4. PREAPARING <br />VISUALIZATION
                        </div>
                    </center>

                </div>

                <div className='function lg:block hidden'>
                    <div className='icon-aroow'>
                        <center   >
                            <FaArrowRight style={{ color: '#0083e8' }} size={'50'} />
                        </center>
                    </div>
                </div>

                <div className='function'>

                    <center>

                        <div className='icon w-24 bg-[#0083e8] rounded-full p-6'>
                            <div className="text-white text-5xl">
                                <MdAutoGraph />
                            </div>

                        </div>

                        <div className='text-sm font-bold mt-3'>
                            5. HELPING <br />DECISION-MAKING
                        </div>
                    </center>

                </div>

            </div>
        </div>
    )
}
