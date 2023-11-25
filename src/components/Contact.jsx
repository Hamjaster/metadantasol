import React from 'react';
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <div className="flex flex-col shadow-2xl md:flex-row rounded-2xl  text-white w-11/12 mx-auto my-44">

            {/* Left Part */}
            <div className="p-20 md:w-1/2 bg-[#136aff] rounded-br-2xl rounded-bl-2xl md:rounded-tl-2xl md:rounded-bl-2xl text-xl">
                <h2 className="text-5xl font-bold mb-8">Call US</h2>

                <p className="mb-4 flex flex-row items-center space-x-5">
                    <div className="text-2xl">
                        <IoCall />
                    </div>
                    <div className="call">
                        <b>US </b> <a href="tel:+13239999988">+1 (323)999-9988</a>
                    </div>
                </p>

                <p className="mb-8 flex flex-row items-center space-x-5">
                    <div className="text-2xl">
                        <IoCall />
                    </div>
                    <div className="call">
                        <b>IN </b> <a href="tel:+919988899888">+91 99888-99888</a>
                    </div>
                </p>
                <p className="mb-8 ">
                    <a className='flex flex-row items-center space-x-5' href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                        <div className="logo text-3xl">
                            <IoLogoWhatsapp />
                        </div>
                        <span>
                            Add WhatsApp
                        </span>
                    </a>
                </p>
                <div className="flex flex-row items-center space-x-5">
                    <p className="text-3xl">
                        <MdEmail />
                    </p>
                    <p className='underline mb-2 cursor-pointer'>support@metadatansol.com</p>
                </div>
            </div>

            {/* Right Part */}
            <div className=" rounded-tr-2xl rounded-br-2xl text-gray-800 p-8 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-8">Contact Form</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">
                            Name<span className="text-red-500">*</span>:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#136aff]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2">
                            Phone<span className="text-red-500">*</span>:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#136aff]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email<span className="text-red-500">*</span>:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#136aff]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">
                            Message<span className="text-red-500">*</span>:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#136aff]"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="organization" className="block mb-2">
                            Organization:
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#136aff]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#136aff] text-white w-full py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;