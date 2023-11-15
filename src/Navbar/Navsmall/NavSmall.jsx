import Popup from 'reactjs-popup'
import { Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'
import {IoBookSharp} from 'react-icons/io5'
import {FaIndustry} from 'react-icons/fa'
import {FaLocationDot } from 'react-icons/fa6'

import './NavSmall.css'


 export const NavSmall = () => (
  
  <div className="nav-header">
    <div className="nav-content">
      <div className='Logo'>Logo</div>
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
            <li className='haha' ><MdMiscellaneousServices size="30" className='service'/>Services</li>
            <li className='haha'> <BsFillCartFill size="30" className="product"/>Products</li>
        <li className='haha'><IoBookSharp size="30" className="Resource"/>Resources</li>
        <li className='haha'><FaIndustry size="30" className="Industries"/>Industries</li>
        <li className='haha'><FaLocationDot size="30" className="Company"/>Company</li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

