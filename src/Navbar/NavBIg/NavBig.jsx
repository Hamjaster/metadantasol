import React from 'react'
// import './NavBIg.css'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IoBookSharp } from 'react-icons/io5'
import { FaIndustry } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-icon.png'

export const NavBig = () => {
  return (

    <nav className='flex flex-row justify-between mx-5 py-3 items-center'>
      <Link to={'/'} className="flex cursor-pointer items-center flex-row space-x-3">
        <img src={logo} className='w-10' alt="" srcset="" />
        <strong className='text-xl'>MetaDantAsol</strong>
      </Link>

      <ul className='flex flex-row justify-end text-lg [&>*]:space-x-2 [&>*]:flex [&>*]:flex-row  [&>*]:items-center space-x-10'>

        <Link to={'/about'} className='hover:text-[#0083e8] cursor-pointer'>
          <MdMiscellaneousServices className='' />
          <span>
            About
          </span>
        </Link>
        <Link to={'/services'} className='hover:text-[#0083e8] cursor-pointer'>
          <BsFillCartFill className="" />
          <span>
            Services
          </span>
        </Link>
        <li className='hover:text-[#0083e8] cursor-pointer'>
          <IoBookSharp className="" />
          <span>
            Resources
          </span>
        </li>
        <li className='hover:text-[#0083e8] cursor-pointer'>
          <FaIndustry className="" />
          <span>
            Industries
          </span>
        </li>
        <li className='hover:text-[#0083e8] cursor-pointer'>
          <FaLocationDot className="" />
          <span>
            Company
          </span>
        </li>

      </ul>

      <ul className='flex flex-row space-x-5'>
        {/* <div className=' cursor-pointer hover:bg-[#1057d2] px-5 py-2 text-white bg-[#136aff] text-center rounded-3xl'>Get in touch </div> */}
        <div className=' cursor-pointer px-5 hover:bg-[#005ea6] py-2 border-2 text-white  bg-[#0083e8] text-center rounded-3xl'>Get in touch </div>
        <div className=' cursor-pointer px-5 hover:bg-[#0083e8] hover:text-white py-2 border-2 text-[#0083e8]  border-[#0083e8] text-center rounded-3xl'>Build your team </div>
      </ul>

    </nav>

  )
}