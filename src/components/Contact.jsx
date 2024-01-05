import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FadeUp from './FadeUp';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';
import { FaLinkedin, FaSpinner } from 'react-icons/fa';

const ContactSection = () => {

    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        // notify();
        e.preventDefault();

        setLoading(true)
        if ((document.getElementById("name").value === "") | (document.getElementById("email").value === "") | (document.getElementById("phone").value === "")) {
            // toast.warn("You missed a field", {
            //     autoClose: 500,
            //     hideProgressBar: false,
            // });

        } else {
            setLoading(true)
            emailjs.sendForm(
                "service_vxyotcd",
                "template_9va0ubq",
                e.target,
                "0kaS0Fh3vdQJZwSbc"
            )
                .then(
                    (result) => {
                        console.log(result);
                        if (result.text === "OK") {
                            toast.success("Successfully submited, We'll contact you soon ")
                            document.getElementById("name").value = "";
                            document.getElementById("email").value = "";
                            document.getElementById("phone").value = "";
                            document.getElementById("org").value = "";
                            document.getElementById("message").value = "";
                            setLoading(false)
                        } else {
                            toast(result.text)
                            setLoading(false)
                        }
                    },
                    (error) => {
                        console.log(error);
                        setLoading(false)
                        toast.error("Error while sending Email")

                    }
                );

            setLoading(false)
        }
    };

    return (
        <FadeUp
            component={
                <div className="flex flex-col shadow-2xl md:flex-row rounded-2xl  text-white w-11/12 mx-auto mb-20 mt-10">

                    {/* Left Part */}
                    <div className="p-5 sm:p-7 md:p-12 lg:p-20 md:w-1/2 bg-[#0083e8] rounded-tr-2xl rounded-tl-2xl md:rounded-tl-2xl md:rounded-bl-2xl text-lg sm:text-xl">
                        <h2 className=" text-3xl sm:text-5xl font-bold mb-8">Contact US</h2>

                        <p className="mb-8 flex flex-row items-center space-x-5">
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
                        <p className="mb-8 ">
                            <div className="flex flex-row items-center space-x-3 sm:space-x-5">
                                <p className=" text-3xl sm:text-3xl">
                                    <MdEmail />
                                </p>
                                <p className='underline mb-2 cursor-pointer text-sm sm:text-base md:text-md lg:text-lg'>support@metadatansol.com</p>
                            </div>
                        </p>
                        <div className="flex flex-row items-center space-x-3 sm:space-x-5">
                            <p className=" text-3xl sm:text-3xl">
                                <FaLinkedin />
                            </p>
                            <p className=' font-bold cursor-pointer text-sm sm:text-base md:text-md lg:text-lg'>MetaDatAnSol</p>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className=" rounded-tr-2xl text-lg rounded-br-2xl text-gray-800 p-8 md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-8">Contact Form</h2>
                        <form onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">
                                    <span className="text-red-500">*</span>Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0083e8]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block mb-2">
                                    <span className="text-red-500">*</span>Phone:
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0083e8]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">
                                    <span className="text-red-500">*</span>Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0083e8]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">
                                    <span className="text-red-500">*</span>Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0083e8]"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="organization" className="block mb-2">
                                    Organization:
                                </label>
                                <input
                                    type="text"
                                    id="org"
                                    name="org"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#0083e8]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#0083e8] text-white w-full py-2 px-4 rounded-md transition duration-300 hover:bg-[#00599d]"
                            >
                                {loading ?
                                    <>
                                        <FaSpinner className='animate-spin mx-auto' />
                                    </>
                                    :
                                    <>
                                        Send Message
                                    </>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            }
        />
    );
};

export default ContactSection;
