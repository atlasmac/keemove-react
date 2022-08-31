import React from 'react'
import logo from '../images/KeeMove_Logo.png'
import { FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavHashLink } from 'react-router-hash-link'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = React.useState(false);

  function handleScroll() {
    window.scrollY > 1 ? setIsHeaderActive(true) : setIsHeaderActive(false);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className={`main-header ${isHeaderActive ? 'sticky' : ''}`}>
        <nav className='main-nav'>
          <ul className='dropUl'>
            <li className='dropdown'>
              <button className='hamburger link'>
                <GiHamburgerMenu />
              </button>
              <div className='dropdownMenu'>
                <div className='dropdownLinks'>
                  <NavHashLink to='/#about' smooth>
                    About
                  </NavHashLink>
                  <NavHashLink to='/GetStarted/#start'>
                    Get Started
                  </NavHashLink>
                  <NavHashLink to='/Resources' smooth>
                    Resources
                  </NavHashLink>
                  <NavHashLink to='/#book' smooth>
                    Book
                  </NavHashLink>
                  <NavHashLink to='/#contact' smooth>
                    Contact
                  </NavHashLink>
                </div>
              </div>
            </li>
          </ul>
          {/* <ul></ul> */}
          <ul className='links'>
            <li className='links-li'>
              <NavHashLink
                to='/#about'
                smooth
              >
                About
              </NavHashLink>
            </li>
            <li className='links-li'>
              <NavHashLink to='/GetStarted/#start' smooth>
                Get Started
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to='/#home' smooth>
                <img
                  className='header-logo'
                  src={logo}
                  alt="logo"
                />
              </NavHashLink>
            </li>
            <li className='links-li'>
              <NavHashLink to='/Resources/#resources' smooth>
                Resources
              </NavHashLink>
            </li>
            <li className='links-li'>
              <NavHashLink to='/#book' smooth>
                Book
              </NavHashLink>
            </li>
          </ul>

          <ul className='icons'>
            <li>
              <a href="https://www.instagram.com/kee.move/"><FaInstagram /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/keemovellc"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/kee-move-llc/"><FaLinkedinIn /></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header


