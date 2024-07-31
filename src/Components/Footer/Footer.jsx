import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Dani Ren</p>
      <ul>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Form</Link></li>
        <li><a href='mailto:danirenn16@gmail.com'>Email</a></li>
        <li><a href='https://github.com/danicodes1'>GitHub</a></li>
        <li><a href='https://ca.linkedin.com/in/dani-ren'>LinkedIn</a></li>
      </ul>
    </div>
  )
}

export default Footer