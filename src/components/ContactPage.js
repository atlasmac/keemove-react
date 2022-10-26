import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
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
              <a href="mailto:raeleah@keemove.com" target='_blank' rel="noreferrer">
                <div className='contact-icons'>
                  <AiOutlineMail />raeleah@keemove.com
                </div>
              </a>
            </li>
            <li>
              <a href="tel:406-209-9847" target='_blank' rel="noreferrer">
                <div className='contact-icons'>
                  <FaPhoneAlt />(406) 209-9847
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
