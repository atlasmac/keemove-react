import React from 'react'
// import ContactMessage from './ContactMessage';

const ContactForm = () => {

  return (
    <div>
      <form name="contact" action='/success' method="POST" data-netlify="true">
        <input
          type='hidden'
          name='form-name'
          value='contact' />
        <div className="form-group">
          <fieldset >
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="form-control"
                required
              />
            </div>

            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="form-control"
                required
              />
            </div>

          </fieldset>
        </div>
        <div className="form-group">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
            required
          />

        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="input-textarea form-control"  ></textarea>
        </div>



        <div className='buttonDiv'>
          <button
            type="submit"
            className="submit-button"
          >
            Send
          </button>
        </div>

      </form>
    </div>
  )
}

export default ContactForm
