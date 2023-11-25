import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IoBookSharp } from 'react-icons/io5'
import { FaIndustry } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

import './NavSmall.css'


export const NavSmall = () => (

  <div className="nav-header">
    <div className="nav-content">
      <div className='text-2xl font-bold font-roboto'>Logo</div>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className='haha flex flex-row space-x-5 items-center' ><MdMiscellaneousServices size="30" className='service' />
                <Link onClick={() => close()} to={'/'}> Home </Link>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'> <BsFillCartFill size="30" className="product" />
                <Link onClick={() => close()} to={'/about'}> About </Link>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'><IoBookSharp size="30" className="Resource" />
                <span> Resources </span>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'><FaIndustry size="30" className="Industries" />
                <span> Industries </span>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'><FaLocationDot size="30" className="Company" />
                <span> Company </span>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

