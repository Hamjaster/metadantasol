import React from 'react'
import banner from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import card1 from '../../images/card1.jpg'
import card2 from '../../images/card2.jpg'
import card3 from '../../images/card3.jpg'
import card4 from '../../images/card4.jpg'
import './About.css'

export default function About() {
    return (
        <div className='font-nunito'>
            <div div className="banner" >
                <img src={banner} alt="" srcset="" />
            </div >

            {/* About */}
            <div className="about relative z-50 w-full md:w-11/12 mx-auto space-x-3 items-center md:-mt-32  font-roboto bg-white px-24 py-7 flex flex-col md:flex-row ">

                <div className=' md:w-1/4 py-4 md:py-24 text-center md:text-left capitalize font-semibold text-4xl md:text-5xl'>About</div>
                <div className=' md:w-3/4 text-center md:text-left text-[#2a6df8] md:text-3xl text-2xl md:px-4 leading-relaxed md:leading-loose md:border-l-2 '>Metadatansol - Your Trusted Partner for Achieving Data-Driven Success Across Industries and Verticals
                </div>
            </div>

            <div className='mx-[4rem] my-12 text-lg'>

                At Metadatan Solutions, we stand backed by experienced teams with a broad industry background across a myriad of industries spanning diverse sectors, from Manufacturing and Retail to Pharmacy, Logistics, Banking/Finance, Technology, Cannabis and more.
                Your success is our top priority, and we're wholly dedicated to providing analytical solutions that cater to your data excellence needs, from the planning stage right through to execution.



            </div>

            {/* Who are we? */}
            <div className="about -mb-40 mt-6 relative z-50 w-11/12 mx-auto space-x-3 items-start md:items-center font-roboto bg-[#2a6df8] text-white px-8 md:px-14 py-7 flex flex-col md:flex-row ">

                <div className='md:w-2/6 py-8 md:py-24 uppercase font-semibold text-4xl'>Who are we ?</div>
                <div className='md:w-4/6 text-xl md:text-2xl md:px-4 px-0 leading-relaxed'>At Metadatan Solutions, we bring over a decade of unwavering dedication to the BI and analytics sector, and we've embarked on a mission to leverage our extensive experience to support your journey to success. Our core mission revolves around empowering your management with the essential BI tools, ensuring a seamless voyage toward data-driven decision-making.</div>
            </div>

            {/* Fixed BG */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 50, 0.2), rgba(0, 0, 100, 0.5)), url(${banner2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 px-16 md:px-20 mt-5 bg-scroll pt-56 pb-36 text-xl text-white">
                Our clients benefit from our expertise in the domain of data and analytics. Analyzing loads of data is critical and we help our clients for better understanding the past events and predict the prospects entirely based on accurate data analysis. Our experienced professionals cater to the ever-growing data analytics needs of our clients, right from the planning stages to the transformation and execution stages. Also, we propose an optimal course of action so that the transformation process does not seem to be too overwhelming for our clients.
            </div>

            {/* What we do */}
            <div className="what-we-do py-14  px-20 bg-slate-200 text-black text-lg">
                <div>
                    <div className='font-roboto text-4xl text-center font-bold uppercase py-3'>What we do ?</div>
                    <p>In today's rapidly evolving digital landscape, having a forward-looking partner is crucial.Beyond these core services, we extend our offerings to encompass data science, ML, AI, basic flows, and applications for process automation. Additionally, we're well-versed in crafting custom software solutions tailored to address your complex business challenges.</p>
                </div>
            </div>

            {/*  Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="overflow-hidden flex flex-row  items-center">

                    <div className=" h-80 w-1/2 overflow-hidden">

                        <div style={{
                            backgroundImage: `url(${card1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100%'
                        }} className="img w-full hover:scale-125 transition-all duration-500">
                        </div>

                    </div>

                    <div className="flex space-y-5 text-black justify-center flex-col items-center w-1/2">
                        <div className='text-2xl font-semibold'>Business Intelligence</div>

                        <ul className='text-base'>
                            <li>Legacy Data and Report Migration</li>
                            <li>Enterprise Data Warehouse</li>
                            <li>Integration with Existing Systems</li>
                            <li>Mobile BI</li>
                            <li>Reports, Dashboards, Metrics</li>
                            <li>OLAP Cubes</li>
                        </ul>
                    </div>
                </div>

                <div className="overflow-hidden flex flex-row  items-center">
                    <div className=" h-80 w-1/2 overflow-hidden">

                        <div style={{
                            backgroundImage: `url(${card2})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100%'
                        }} className="img w-full hover:scale-125 transition-all duration-500">
                        </div>

                    </div>

                    <div className="flex space-y-5 text-black justify-center flex-col items-center w-1/2">
                        <div className='text-2xl font-semibold'>Data Visualization Services</div>

                        <ul className='text-base'>
                            <li>Report and Dashboard Development</li>
                            <li>EAdvanced Data Discoveryrehouse</li>
                            <li>Ad-hoc Reporting with Mobile BI</li>
                            <li>Migration to New Reporting Tools</li>
                            <li>Cloud/On-Premise Deployment</li>
                            <li>Geospatial Visualization</li>
                        </ul>
                    </div>
                </div>

                <div className="overflow-hidden flex flex-row md:flex-row-reverse items-center">
                    <div className=" h-80 w-1/2 overflow-hidden">

                        <div style={{
                            backgroundImage: `url(${card3})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100%'
                        }} className="img w-full hover:scale-125 transition-all duration-500">
                        </div>

                    </div>

                    <div className="flex space-y-5 text-black justify-center flex-col items-center w-1/2">
                        <div className='text-2xl font-semibold'>Data Science</div>

                        <ul className='text-base'>
                            <li>Advanced Analytics</li>
                            <li>Machine Learning and AI</li>
                            <li>Pilot Project Design</li>
                            <li>Enhanced Customer Engagement</li>
                            <li>Supply Chain Analytics</li>
                            <li>Innovative Product Development</li>
                        </ul>
                    </div>
                </div>

                <div className="overflow-hidden flex flex-row md:flex-row-reverse items-center">
                    <div className=" h-80 w-1/2 overflow-hidden">

                        <div style={{
                            backgroundImage: `url(${card4})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100%'
                        }} className="img w-full hover:scale-125 transition-all duration-500">
                        </div>

                    </div>

                    <div className="flex space-y-5 text-black justify-center flex-col items-center w-1/2">
                        <div className='text-xl font-semibold'>Custom Software Development</div>

                        <ul className='text-base'>
                            <li>Process Automation</li>
                            <li>Fraud Detection</li>
                            <li>Personalized Data Analytics Tools</li>
                            <li>Custom CRM Systems</li>
                            <li>Seamless Integration</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* More paragraphs */}
            <div className="para px-20 py-16 my-28 flex flex-col items-center space-y-5">

                <div className='text-4xl md:text-5xl font-semibold text-[#2a6df8] font-roboto py-3'>Our Dedication to Your Triumph</div>
                <p className='text-base md:text-xl'>
                    At Metadatan Solutions, we stand backed by experienced teams with a broad industry background across a myriad of industries spanning diverse sectors, from Manufacturing and Retail to Pharmacy, Logistics, Banking/Finance, Technology, Cannabis and more.
                    Your success is our top priority, and we're wholly dedicated to providing analytical solutions that cater to your data excellence needs, from the planning stage right through to execution.
                    <br />
                    Our commitment extends beyond mere project completion. We are dedicated to building lasting, strategic partnerships, characterized by an unwavering focus on continuous improvement. Through our technology-driven approach, we empower you to conquer even the most complex business challenges, propelling your organization towards unprecedented growth. Your success remains our unwavering pledge.
                </p>

            </div>

            {/* <div className="mb-96"></div> */}
        </div >
    )
}
