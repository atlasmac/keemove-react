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
                <NavHashLink to='/' smooth>
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/' smooth>
                  About
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/' smooth>
                  Get Started
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/' smooth>
                  Services
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/' smooth>
                  Book
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to='/' smooth>
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
                <a href="mailto:keemove@gmail.com"><span> <AiOutlinePhone />keemove@gmail.com</span> </a>
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
