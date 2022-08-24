import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { NavHashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
      <footer>
        <div className='footer-container'>
          <div className='footer-div'>
            <h4>Menu</h4>
            <ul>
              <li>
                <NavHashLink to='/#home' smooth>
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/#about' smooth>
                  About
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/GetStarted/#start' smooth>
                  Get Started
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/#book' smooth>
                  Book
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/Resources/#resources' smooth>
                  Resoures
                </NavHashLink>
              </li>
            </ul>
          </div>
          <div className='footer-div'>
            <h4>Contact</h4>
            <ul>
              <li>
                Missoula, Montana
              </li>
              <li>
                <a href="tel:2625013901"> <span> <AiOutlineMail />(262) 501-3901</span> </a>
              </li>
              <li>
                <a href="mailto:raeleah@keemove.com"><span> <AiOutlinePhone />raeleah@keemove.com</span> </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
            <p>KeeMove © 2022</p>
          </div>
      </footer>
  )
}

export default Footer
