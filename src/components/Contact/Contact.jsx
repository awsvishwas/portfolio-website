import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact container-margin'>
            <h3>Send me a message <img src='' alt="" /></h3>
            <p>Feel free to reach out through contact form. 
                Your feedback, questions, and suggestions are important to us to provide exceptional service to my clients.</p>

                <form className='contact-form'>
                <div className='contact-wrapper'>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <input type="tel" name="phone" placeholder='Enter Your Contact Number' />
                <input type="email" name="email" placeholder='Enter Your Email' />
                </div>
                <textarea type="text" name="message" placeholder='Message here...' rows={6}/>
                <button type='submit' className='btn'>Submit now</button>
            </form>
            <span className='sending'></span>
      
    </div>
  )
}

export default Contact
