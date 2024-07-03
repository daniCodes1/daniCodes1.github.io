import React from 'react'
import './Experiences.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import programming from '../../assets/programming.png'
import laptop from '../../assets/laptop.png'
import teaching from '../../assets/teaching.png'
import science from '../../assets/science.png'
import leader from '../../assets/leader.png'
import clothes from '../../assets/clothes.png'
import woker from '../../assets/worker.png'

const Experiences = () => {
  const slides = [
    {
      title: 'Frontend Software Developer',
      company: 'Terra CO2',
      date: 'May 2024 - Aug 2024',
      description: 'Created blah blah blah blah blah! Then I made this and that and went to do this and that. Lastly, I created some of these for that.',
      image: programming // Assuming you have imported 'programming' image
    },
    {
      title: 'IT Technician',
      company: 'Terra CO2',
      date: 'May 2024 - Aug 2024',
      description: 'Created blah blah blah blah blah! Then I made this and that and went to do this and that. Lastly, I created some of these for that.',
      image: laptop // Assuming you have imported 'programming' image
    },
  ]
  return (
    <div className='experiences'>
      <img src={next} alt="next" className='next-btn' />
      <img src={back} alt="back" className='back-btn' />

      <div className='slider'>
        <ul>
        {slides.map((slide, index) => (
          <li key={index}>
            <div className="slide">
              <div className="exp-info">
                <img src={slide.image} alt=""/>
                <div>
                  <h3>{slide.title}</h3>
                  <span><i>{slide.company}, {slide.date}</i></span>
                </div>
              </div>
              <p>{slide.description}</p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Experiences