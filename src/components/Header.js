import React from 'react'
import logo from '../images/KeeMove_Logo.png'
import { FaYelp, FaLinkedinIn } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavHashLink } from 'react-router-hash-link'

const Header = () => {

  return (
    <div>
      <header className='main-header'>
        <nav className='main-nav'>
            <ul className='dropUl'>
              <li className='dropdown'>
                <button className='hamburger link'>
                  <GiHamburgerMenu />
                </button>
                <div className='dropdownMenu'>
                  <div className='dropdownLinks'>
                    <NavHashLink to='/' smooth>
                      About
                    </NavHashLink>
                    <NavHashLink to='/' smooth>
                      Get Started
                    </NavHashLink>
                    <NavHashLink to='/' smooth>
                      Services
                    </NavHashLink>
                    <NavHashLink to='/' smooth>
                      Resources
                    </NavHashLink>
                  </div>
                </div>
              </li>
            </ul>
          {/* <ul></ul> */}
          <ul className='links'>
            <li className='links-li'>
              <NavHashLink to='/' smooth>
                About
              </NavHashLink>
            </li>
            <li className='links-li'>
              <NavHashLink to='/' smooth>
                Get Started
              </NavHashLink>
            </li>
            <li>
              <img
                className='header-logo'
                src={logo}
                alt="logo"
              />
            </li>
            <li className='links-li'>
              <NavHashLink to='/' smooth>
                Services
              </NavHashLink>
            </li>
            <li className='links-li'>
              <NavHashLink to='/' smooth>
                Resources
              </NavHashLink>
            </li>
          </ul>

          <ul className='icons'>
            <li>
              <a href="#"><FaYelp /></a>
            </li>
            <li>
              <a href="#"><FaLinkedinIn /></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header


