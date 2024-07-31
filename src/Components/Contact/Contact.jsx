import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import arrow from '../../assets/white-arrow.png'
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "94790097-b59d-4ba2-a874-165442b60297");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


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
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required/>
          <button type="submit" className='btn dark-btn'>
            Submit
            <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact