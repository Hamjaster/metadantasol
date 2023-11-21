// ContactFormWithImage.js

import React from 'react';
import img from './../../images/contact.jpg'
// import img from './../../images/contact2.svg'


export const ContactFormWithImage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-b mb-60">

            {/* Left side with image */}
            <div className="flex-shrink-0 md:w-1/2">
                <img
                    src={img} // Assuming your image is in the public folder
                    alt="Contact"
                    className="object-cover w-[35rem] float-right"
                />
            </div>

            {/* Right side with form */}
            <div className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-8">
                <div className="p-8">
                    <h2 className="text-5xl font-bold text-[#136aff] mb-6">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-[#136aff] block mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 rounded-md outline-none border-2 border-[#136aff]"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="company" className="text-[#136aff] block mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full p-2 rounded-md outline-none border-2 border-[#136aff]"
                                placeholder="Your Company"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="text-[#136aff] block mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-2 rounded-md outline-none border-2 border-[#136aff]"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full border-2 my-3 border-[#136aff] rounded-md text-[#136aff] hover:bg-[#136aff] hover:text-white transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};