import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdContactPhone, MdInsights, MdMiscellaneousServices } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IoBookSharp } from 'react-icons/io5'
import { FaIndustry } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import logo from '../../images/logo-icon.png'
import './NavSmall.css'


export const NavSmall = () => (

  <div className="nav-header">
    <div className="nav-content">
      <div className='text-2xl font-bold font-roboto'>
        <Link to={'/'} className="flex cursor-pointer items-center flex-row space-x-3">
          <img src={logo} className='w-10' alt="" srcset="" />
          <strong className='text-xl'>MetaDatAnSol</strong>
        </Link>
      </div>
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
              <li className='haha flex flex-row space-x-5 items-center'> <IoBookSharp className="" />
                <Link onClick={() => close()} to={'/solutions'}> Services </Link>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'>  <MdInsights />
                <Link onClick={() => close()} to={'/insights'}> Insights </Link>
              </li>
              <li className='haha flex flex-row space-x-5 items-center'> <MdContactPhone />
                <Link onClick={() => close()} to={'/career'}> Careers </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

