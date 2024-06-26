import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-title'>
        <h1>Welcome to my personal website</h1>
        <p>I am a third year UBC computer science student </p>
        <button className='btn'>Learn more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero