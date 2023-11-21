import React from 'react'
import client1 from '../../images/client1.png'
import client2 from '../../images/client2.png'
import client3 from '../../images/client3.png'
import client4 from '../../images/client3.webp'
import client5 from '../../images/client4.webp'
import './Clients.css'

export default function Clients() {
    return (

        <div className='py-24 my-20 space-y-8'>
            <div className='text-6xl py-3 font-bold text-[#136aff] text-center'>Meet our clients
                <div className="border-b-4 border-blue-500 w-1/3 my-3 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 mx-24">

                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client2} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client3} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client4} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client5} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client2} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client3} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client4} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client5} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client2} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client3} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client4} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client5} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client2} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client3} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client4} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client5} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client2} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client3} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
                <div className='item' >
                    <img className='logo' src={client1} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}
