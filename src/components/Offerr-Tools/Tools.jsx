import React from 'react'
import './Tools.css'
import powerbi from '../../images/powerBI.png'
import salesforce from '../../images/salesforce.png'
import aws from '../../images/aws.png'
import sap from '../../images/sap.png'
import sapa from '../../images/sapa.png'
import sapo from '../../images/sapo.png'
import msfabric from '../../images/msfabric.png'
import tableau from '../../images/tableau.png'
import azure from '../../images/azure.png'
import FadeUp from '../FadeUp'

export const Tools =
    () => {
        return (
            <FadeUp delay={1} component={
                <div className='py-5 mt-28 mb-12 mx-auto text-center flex flex-col items-center'>

                    <div className='text-3xl sm:leading-[4rem] sm:text-5xl py-3 w-11/12 sm:w-2/3 text-center font-bold text-[#0083e8]'>
                        Proficiency in Leading Business Intelligence Solutions
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 w-11/12 sm:w-9/12 gap-10 p-10 mx-auto mt-12'>

                        <div className="w-full flex justify-center">
                            <img src={powerbi} className='w-56 text-center' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={msfabric} className='w-64' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={azure} className='w-56        ' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={tableau} className='w-64' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={salesforce} className='w-64' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={aws} className='w-56' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={sap} className='w-52' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={sapa} className='w-56' alt="" srcset="" />
                        </div>
                        <div className="w-full flex justify-center">
                            <img src={sapo} className='w-64' alt="" srcset="" />
                        </div>


                    </div>

                </div>
            }>

            </FadeUp>

        )
    }
