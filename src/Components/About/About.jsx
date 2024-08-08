import React from 'react'
import './About.css'
import self_img from '../../assets/website-photo.jpg'
import java from '../../assets/java.png'
import js from '../../assets/javascript.png'
import python from '../../assets/python.png'


const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={self_img} alt="" className='about-img'/>
      </div>
      <div className='about-right'>
        <h3> ABOUT ME </h3>
        <h2>Hi! I'm Dani :)</h2>
        <h4>D<span>riven by a passion for bringing ideas to life with my skills</span></h4>
        <h4>A<span>dept at creating innovative solutions in the ever-evolving tech field</span></h4>
        <h4>N<span>avigating new challenges excites me and fuels my continuous growth</span></h4>
        <h4>I<span>n every project I take on, I strive for excellence and impactful results</span></h4>
          <img src={python} alt="python" className='languages'/>
          <img src={js} alt="js" className='languages'/>
          <img src={java} alt="java" className='languages' style={{ marginLeft: '45px' }}/>
      </div>
    </div>
  )
}

export default About