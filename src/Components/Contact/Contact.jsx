import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import arrow from '../../assets/white-arrow.png'
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3> Send me a message <img src={msg_icon} alt="" /></h3>
        <p>Any questions, concerns or just want to chat? I'd love to hear from you!</p>
        <ul>
          <li>  <a href="mailto:danirenn16@gmail.com"
                class="social-icon"><i
                  class="fa fa-envelope"></i></a>
                  <p> Email </p>
          </li>
          <li> <a href="https://github.com/danicodes1"
                class="social-icon"><i
                  class="fab fa-github"></i></a>
                  <p> GitHub </p>
          </li>
          <li> <a
                href="https://ca.linkedin.com/in/dani-ren"
                class="social-icon"><i
                  class="fab fa-linkedin"></i></a>
                  <p> LinkedIn </p>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your messagte' required/>
          <button type="submit" className='btn dark-btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact