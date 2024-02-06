import React, { useState } from 'react';
// import './NavBig.css' // Import if necessary
import { MdContactPhone, MdInsights, MdMiscellaneousServices } from 'react-icons/md';
import { BsFillCartFill, BsPhoneFill } from 'react-icons/bs';
import { IoBookSharp } from 'react-icons/io5';
import { FaIndustry } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-icon.png';
import { useDisclosure } from '@chakra-ui/react';
import ExploreModal from '../../components/ExploreModal';

export const NavBig = () => {
  const [activeLink, setActiveLink] = useState("metadantasol"); // Initialize with no active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className='flex min-[1600px]:w-2/3 min-[1600px]:mx-auto flex-row justify-between mx-5 py-3 items-center'>
      <Link to={'/'} className="flex cursor-pointer items-center flex-row mr-6 space-x-3">
        <img src={logo} className='w-10' alt="" srcset="" />
        <strong onClick={() => handleLinkClick('metadantasol')} className={ `text-xl ${activeLink === 'metadantasol' ? '' : ''}`}>MetaDatAnSol</strong>
      </Link>

      <ul className='flex flex-row justify-end text-lg [&>*]:space-x-2 [&>*]:flex [&>*]:flex-row [&>*]:items-center space-x-16'>
        <li className={`${activeLink === 'solutions' ? 'underline text-[#0083e8]' : ''}`}>
          <Link to={'/solutions'} className='hover:text-[#0083e8] flex space-x-2 align-middle justify-center cursor-pointer' onClick={() => handleLinkClick('solutions')}>
            <BsFillCartFill className="m-1" />
            <span>
              Solutions
            </span>
          </Link>
        </li>
        <li className={`${activeLink === 'about' ? 'underline text-[#0083e8]' : ''}`}>
          <Link to={'/about'} className='hover:text-[#0083e8] flex space-x-2 cursor-pointer' onClick={() => handleLinkClick('about')}>
            <IoBookSharp className="m-1" />
            <span>
              About
            </span>
          </Link>
        </li>
        <li className={`${activeLink === 'insights' ? 'underline text-[#0083e8]' : ''}`}>
          <Link to={'/insights'} className='hover:text-[#0083e8] flex space-x-2 cursor-pointer' onClick={() => handleLinkClick('insights')}>
            <MdInsights className='m-1' />
            <span>
              Insights
            </span>
          </Link>
        </li>
        <li className={`${activeLink === 'career' ? 'underline text-[#0083e8]' : ''}`}>
          <Link to={'/career'} className='hover:text-[#0083e8] flex space-x-2 cursor-pointer' onClick={() => handleLinkClick('career')}>
            <MdContactPhone className='m-1' />
            <span>
              Careers
            </span>
          </Link>
        </li>
      </ul>

      <ul className='flex flex-row space-x-5'>
        {/* <div className=' cursor-pointer hover:bg-[#1057d2] px-5 py-2 text-white bg-[#136aff] text-center rounded-3xl'>Get in touch </div> */}
        <Link to={'/contact'} className=' cursor-pointer px-5 hover:bg-[#005ea6] py-2 border-2 text-white  bg-[#0083e8] text-center rounded-3xl'>Get in touch </Link>
        {/* <div onClick={onOpen} className=' cursor-pointer px-5 hover:bg-[#0083e8] hover:text-white py-2 border-2 text-[#0083e8]  border-[#0083e8] text-center rounded-3xl'>Build your team </div> */}
      </ul>

      <ExploreModal isOpen={isOpen} onClose={onClose} />
    </nav>
  );
};
