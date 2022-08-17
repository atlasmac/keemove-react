import React from 'react'
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import ContactForm from './ContactForm'

const ContactPage = () => {


  return (
    <div className='div'>
    <div className='contactPage' id='contact'>
      
      <div className='contact'>
        <div className='contactDiv'>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto: Keemove@gmail.com" target='_blank' rel="noreferrer">
                <div className='contact-icons'>
                  <AiOutlineMail />Keemove@gmail.com
                </div>
              </a>
            </li>
            <li>
              <a href="tel:4065294442" target='_blank' rel="noreferrer">
                <div className='contact-icons'>
                  <FaPhoneAlt />(406) 529-4442
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kee.move/" target='_blank' rel="noreferrer">
                <div className='contact-icons'>
                  <FaInstagram />
                  @kee.move
                </div>
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />

      </div>
    </div>
    </div>

  )
}

export default ContactPage
