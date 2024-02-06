import React from 'react'
import banner from '../../images/banner5.jpg'
import banner2 from '../../images/bg6.jpg'
import FadeUp from '../../components/FadeUp'
import './About.css'
import Reveal from '../../components/Reveal'
import one from '../../images/one.mp4'
import two from '../../images/two.mp4'
import three from '../../images/three.mp4'
import four from '../../images/four.mp4'

export default function About() {
    const cards = [
        {
            title: 'Business Intelligence',
            bullets: ["Legacy Data and Report Migration", "Enterprise Data Warehouse", "Integration with Existing Systems", "Mobile BI", "Reports, Dashboards, Metrics", "OLAP Cubes"],
            video: one
        },
        {
            title: 'Data Visualization',
            bullets: ["Report and Dashboard Development", "Advanced Data Discovery", "Ad-hoc Reporting with Mobile BI", "Migration to New Reporting Tools", "Cloud/On-Premise Deployment", "Geospatial Visualization"],
            video: two
        },
        {
            title: 'Data Science',
            bullets: ["Advanced Analytics", "Machine Learning and AI", "Pilot Project Design", "Enhanced Customer Engagement", "Supply Chain Analytics", "Innovative Product Development"],
            video: three
        },
        {
            title: 'Custom Software Development',
            bullets: ["Process Automation", "Fraud Detection", "Personalized Data Analytics Tools", "Custom CRM Systems", "Seamless Integration"],
            video: four
        },
    ]
    return (
        <div className='font-nunito'>
            <div div className="banner bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${banner})` }}
            >

            </div >

            {/* About */}
            <div className="about shadow-2xl relative z-50 w-full md:w-11/12 mx-auto  items-center md:-mt-32   bg-white px-12 sm:px-24 py-7 space-y-10 md:space-y-0  flex flex-col md:flex-col ">

                <div className="about flex flex-col md:flex-row items-center">

                    <div className='w-full md:w-1/4 py-4 text-3xl text-[#0083e8] md:py-24 text-center md:text-left capitalize font-bold md:text-4xl heading  '>About</div>
                    <div className='w-full   md:w-3/4 text-center md:text-left text-[#0083e8] md:text-3xl text-2xl md:px-4 leading-relaxed md:leading-loose md:border-l-2  description font-bold'>MetaDatAnSol - Your Trusted Partner for Achieving Data-Driven Success Across Industries and Verticals
                    </div>

                </div>

                <div className="whoweare flex flex-col md:flex-row items-center">
                <div className='w-full md:w-1/4  text-lg text-[#0083e8] sm:md:py-24 text-center md:text-left capitalize  md:text-4xl heading  font-bold'>Who We are ?</div>
                    <div className='md:w-3/4 text-center text-lg text-[#0083e8] sm:text-sm md:text-xl font-bold  description leading-relaxed'>
                        At MetaDatAnSol Solutions, we're seasoned experts with over a decade of experience, dedicated to fostering a data-centric evolution. Our commitment spans various industries, providing customized solutions for analytics, data science, and cutting-edge technologies. We empower businesses with precise insights, guiding them to excel in today's data-driven landscape.
                    </div>
                </div>

            </div>


            {/* Fixed BG */}
            {/* <div style={{ color: 'rgba(0,131,232, 0.4)' }} className='bg-[rgba(0,131,232, 0.4)]'></div> */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 px-5 sm:px-16 md:px-20 -mt-32 bg-scroll pt-44 sm:pt-56 pb-10 sm:pb-36 text-sm text-center sm:text-2xl xl:text-2xl text-gray-100 fomt-bold description ">
                <FadeUp
                    component={
                        <>
                            Our clients benefit from our expertise in the domain of data and analytics. Analyzing loads of data is critical and we help our clients for better understanding the past events and predict the prospects entirely based on accurate data analysis. Our experienced professionals cater to the ever-growing data analytics needs of our clients, right from the planning stages to the transformation and execution stages. Also, we propose an optimal course of action so that the transformation process does not seem to be too overwhelming for our clients.
                        </>
                    }
                />
            </div>
            {/* What we do */}
            <FadeUp
                component={
                    <div className="what-we-do text-center py-14 px-8 sm:px-20 bg-slate-200 text-black text-xl">
                        <div>
                            <div className=' heading sm:text-5xl  text-center font-bold py-3 text-3xl  text-[#0083e8]'>WHAT WE DO ?</div>
                            <p className='xl:text-2xl text-gray-500 description   font-bold'>In today's rapidly evolving digital landscape, having a forward-looking partner is crucial. Beyond these core services, we extend our offerings to encompass data science, ML, AI, basic flows, and applications for process automation. Additionally, we're well-versed in crafting Custom Software Solutions tailored to address your complex business challenges.</p>
                        </div>
                    </div>
                }
            />

            {/*  Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-0 md:grid-cols-2">

                {
                    cards.map((card, index) => {
                        const isEven = index % 2 === 0;
                        let contentOrder = '';

                        // Conditionally set contentOrder based on index
                        if (index === 1 || index === cards.length - 2) {
                            contentOrder = isEven ? 'lg:flex-row-reverse' : 'lg:flex-row';
                        } else {
                            contentOrder = isEven ? 'lg:flex-row' : 'lg:flex-row-reverse';
                        }
                        return <FadeUp
                            component={
                                <div className={`"overflow-hidden text-lg flex flex-col ${contentOrder}   items-center"`}>

                                    <div className="h-80 relative w-full lg:w-1/2 overflow-hidden">
                                        <video
                                            className="absolute hover:scale-125 transition-all duration-300 cursor-pointer top-0 left-0 z-0 w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                        >
                                            <source src={card.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    <div className="flex p-5 space-y-5 text-black justify-center flex-col sm:items-center w-full lg:w-1/2">
                                        <div className='text-center text-2xl sm:text-2xl xl:text-3xl md:border-b-2 text-[#0083e8] heading md:border-[#0083e8] md:w-full font-bold '>{card.title}</div>

                                        <ul className='text-base xl:text-lg lg:list-disc md:text-left text-center -mr-12'>
                                            {card.bullets.map((b) => {
                                                return <li>{b}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            }
                        />
                    })
                }


            </div>

            {/* Experience meets commitment */}
            {/* <FadeUp
                component={
                    <div className="about -mb-40 mt-20 relative z-50 w-11/12 mx-auto space-x-3 items-start md:items-center  bg-white px-4 sm:px-8 md:px-14 py-4 sm:py-7 flex flex-col md:flex-row ">

                        <div className='md:w-2/6 py-4 sm:py-8 md:py-16 uppercase font-bold text-center text-2xl sm:text-3xl  leading-normal'>Experience Meets Commitment</div>
                        <div className='md:w-4/6 md:border-l-2 text-[#0083e8] text-lg md:text-2xl md:px-4 px-0 leading-relaxed'>  At MetaDatAnSol Solutions, we stand backed by experienced teams with a broad industry background across a myriad of industries spanning diverse sectors, from Manufacturing and Retail to Pharmacy, Logistics, Banking/Finance, Technology, Cannabis and more.

                            .</div>
                    </div>
                }
            /> */}

            {/* Fixed BG */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }} className="banner2 font-bold px-8 description sm:px-16 md:px-20 mt-5 bg-scroll pt-44 sm:pt-56 pb-24 sm:pb-36 text-lg xl:text-2xl text-white   ">
                <FadeUp
                    component={
                        <>
                            At MetaDatAnSol Solutions, our service spectrum is designed to fuel your business's data-powered journey. From expert business intelligence and analytics services spanning diverse industries to predictive analysis aiding in strategic foresight, we're committed to delivering actionable insights. Our comprehensive approach navigates the complex landscape of data, offering services in data science, machine learning, AI, and tailored software solutions. Trust us as your forward-thinking partner, crafting solutions that streamline processes, ensuring a competitive edge in today's digital era.
                        </>
                    }
                />
            </div>

            {/* tailwored client */}


            <FadeUp
                component={
                    <div className="about -mt-20 -mb-20 relative z-50 w-11/12 mx-auto space-x-3 items-start md:items-center  bg-white px-4 sm:px-8 md:px-14 py-4 sm:py-7 flex flex-col md:flex-row ">

                        <div className='md:w-2/6 py-4 text-3xl text-[#0083e8] sm:py-8 md:py-16 uppercase font-bold text-center  sm:text-3xl leading-normal heading'>A Tailored Client-Centric Strategy</div>
                        <div className='md:w-4/6 md:border-l-2 text-[#0083e8] text-lg md:text-2xl md:px-4 px-0 leading-relaxed font-bold description '>At MetaDatAnSol Solutions, we lead clients towards data-centric excellence, navigating transformation journeys hand in hand. Our commitment lies in delivering insightful solutions and fostering technological advancement to elevate businesses. Upholding rigorous technical standards, we ensure timely project completion across data engineering, analytics, science, custom solutions, and multi-year digital transformations
                            .</div>
                    </div>
                }
            />

            {/* More paragraphs */}
            <FadeUp
                component={
                    <div style={{
                        backgroundImage: `linear-gradient(to bottom, rgb(11 126 215 / 70%), rgb(1 73 128 / 96%)), url(${banner2})`,
                        backgroundPosition: "center",
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }} className="bg-[hsl(206,85%,89%)]  text-gray-100 para px-8 sm:px-20 pt-24 pb-12 sm:py-24 my-6 sm:my-10 flex flex-col items-center space-y-5">

                        <div className='text-2xl sm:text-4xl md:text-5xl font-medium text-white text-center  py-1 sm:py-3 heading'>Our Dedication to Your Triumph</div>
                        <p className='text-sm sm:text-base md:text-2xl description  text-center font-semibold'>
                            <br />
                            Your success is our top priority, and we're wholly dedicated to providing analytical solutions that cater to your data excellence needs, from the planning stage right through to execution.
                            <br />
                            <br />
                            Our commitment extends beyond mere project completion. We are dedicated to building lasting, strategic partnerships, characterized by an unwavering focus on continuous improvement. Through our technology-driven approach, we empower you to conquer even the most complex business challenges, propelling your organization towards unprecedented growth. Your success remains our unwavering pledge.
                        </p>

                    </div>
                }
            />

            {/* <div className="mb-96"></div> */}
        </div >
    )
}
