import React from 'react'
import logo from '../../images/logo-icon.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsappSquare } from 'react-icons/fa'
import { FaWhatsapp, FaX } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
    return (


        <footer class="bg-[#0083e8] text-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <Link to={'/'} className="flex cursor-pointer items-center flex-row space-x-3">
                            <img src={logo} className='w-10' alt="" srcset="" />
                            <strong className='text-xl'>MetaDatAnSol</strong>
                        </Link>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold  uppercase ">Quick Links</h2>
                            <ul class="font-medium space-y-2">
                                <li class="">
                                    <Link to={'/'} class="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/solutions'} class="hover:underline">Solutions</Link>
                                </li>
                                <li>
                                    <Link to={'/about'} class="hover:underline">About</Link>
                                </li>
                                <li class="">
                                    <Link to={'/insights'} class="hover:underline">Insights</Link>
                                </li>
                                <li class="">
                                    <Link to={'/career'} class="hover:underline">Careers</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="mb-6 text-sm font-semibold  uppercase ">Legal</h2>
                            <ul class=" font-medium">
                                <li class="mb-4">
                                    <Link to={'/privacy-policy'}>
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/disclaimer'}>
                                        <a href="#" class="hover:underline">Disclaimer</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm  sm:text-center ">© 2023 <a class="hover:underline">MetaDatAnSol</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 text-xl xl:text-2xl sm:justify-center sm:mt-0">

                        <a href="#" class="  dark:hover:text-white ms-5">
                            <FaLinkedin />
                            <span class="sr-only">LinkedIN</span>
                        </a>
                        <a href="#" class="  dark:hover:text-white ms-5">
                            <SiGmail />
                            <span class="sr-only">Email</span>
                        </a>
                        <a href="#" class="  dark:hover:text-white ms-5">
                            <FaWhatsapp />
                            <span class="sr-only">Whatsapp page</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    )
}
