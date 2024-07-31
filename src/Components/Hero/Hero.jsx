import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-title'>
        <h1>Welcome to my personal website</h1>
        <p>I am a third year UBC computer science student </p>
        <Link to='about' smooth={true} offset={-100} duration={500}
          className='btn'>Learn more <img src={arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero