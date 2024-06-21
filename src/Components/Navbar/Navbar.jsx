import React from 'react'
import './Navbar.css'
import rose from '../../assets/rose.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={rose} alt="Image" className="logo" style={{ height: '50px' }} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar