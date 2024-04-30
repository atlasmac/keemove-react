import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaFax } from 'react-icons/fa'
import { NavHashLink } from 'react-router-hash-link'

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              <a href='https://keemove.myshopify.com/' target='_blank' rel="noreferrer">
                Shop
              </a>
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
              <NavHashLink to='/Resources/#resources' smooth>
                Resoures
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to='/#book' smooth>
                Book
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
              <a href="mailto:raeleah@keemove.com"><span> <AiOutlineMail />raeleah@keemove.com</span> </a>
            </li>
            <li>
              <a href="tel:406-209-9847"> <span> <AiOutlinePhone />Phone: (406) 209-9847</span> </a>
            </li>

            <li>
              <a href="tel:406-209-9847"><span> <FaFax />Fax: (406) 519-0626</span> </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='disclaimer'>
        <p>
          <span>Disclaimer: Nothing on this website is medical advice and no patient-provider relationship is established by purchasing or viewing resources, or by booking or participating in a consultation appointment. If you have a specific problem and are needing medical advice, please contact your doctor to request a referral to establish care with Kee Move, LLC</span>
        </p>
      </div>
      <div className='copyright'>
        <p>KeeMove © 2022 - {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
