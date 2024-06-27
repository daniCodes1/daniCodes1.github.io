import React from 'react'
import './About.css'
import self_img from '../../assets/website-photo.jpg'
import self_img2 from '../../assets/website-photo2.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={self_img} alt="" className='about-img'/>
        {/* <img src={self_img2} alt="" className='about-img'/> */}
      </div>
      <div className='about-right'>
        <h3> ABOUT ME </h3>
        <h2>Third year university student</h2>
        <p> I have taken .... courses, done co-op etc etc etc will fill in</p>
      </div>
    </div>
  )
}

export default About