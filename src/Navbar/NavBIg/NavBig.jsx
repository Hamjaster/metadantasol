import React from 'react'
// import './NavBIg.css'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IoBookSharp } from 'react-icons/io5'
import { FaIndustry } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const NavBig = () => {
  return (

    <nav className='flex flex-row justify-between mx-5 py-3 items-center'>

      <strong className='text-2xl'>Logo</strong>

      <ul className='flex flex-row justify-end text-lg [&>*]:space-x-2 [&>*]:flex [&>*]:flex-row  [&>*]:items-center space-x-10'>

        <Link to={'/about'} className='hover:text-[#136aff] cursor-pointer'>
          <MdMiscellaneousServices className='' />
          <span>
            About
          </span>
        </Link>
        <li className='hover:text-[#136aff] cursor-pointer'>
          <BsFillCartFill className="" />
          <span>
            Products
          </span>
        </li>
        <li className='hover:text-[#136aff] cursor-pointer'>
          <IoBookSharp className="" />
          <span>
            Resources
          </span>
        </li>
        <li className='hover:text-[#136aff] cursor-pointer'>
          <FaIndustry className="" />
          <span>
            Industries
          </span>
        </li>
        <li className='hover:text-[#136aff] cursor-pointer'>
          <FaLocationDot className="" />
          <span>
            Company
          </span>
        </li>

      </ul>

      <ul className='flex flex-row space-x-5'>
        {/* <div className=' cursor-pointer hover:bg-[#1057d2] px-5 py-2 text-white bg-[#136aff] text-center rounded-3xl'>Get in touch </div> */}
        <div className=' cursor-pointer px-5 hover:bg-[#0a52ce] py-2 border-2 text-white  bg-[#136aff] text-center rounded-3xl'>Get in touch </div>
        <div className=' cursor-pointer px-5 hover:bg-[#136aff] hover:text-white py-2 border-2 text-[#136aff]  border-[#136aff] text-center rounded-3xl'>Build your team </div>
      </ul>

    </nav>

  )
}