import React, { useRef } from 'react'
import './Experiences.css'
import assistant from '../../assets/assistant.png'
import back from '../../assets/back.png'
import next from '../../assets/next.png'
import clothes from '../../assets/clothes.png'
import laptop from '../../assets/laptop.png'
import leader from '../../assets/leader.png'
import programming from '../../assets/programming.png'
import science from '../../assets/science.png'
import teaching from '../../assets/teaching.png'
import worker from '../../assets/worker.png'

const Experiences = () => {
  const slides = [
    {
      title: 'Frontend Software Developer',
      company: 'Terra CO2',
      date: 'May 2024 - Aug 2024',
      description: [
        'Developed a web application that enables internal users to interact with the company database.Users can add, modify, and create data, generate reports, and view maps.',
        'Python, JavaScript, HTML, CSS, Flask'
      ],
      image: programming
    },
    {
      title: 'IT Technician',
      company: 'Immigration, Refugees and Citizenship',
      date: 'May 2024 - Aug 2024',
      description: 'Configured and troubleshooted OS, server, security network and application issues. Used Powershell scripting and Active Directory for network administration and managed all IT processes for an office with 200+ users while their IT Specialist was on leave.',
      image: laptop
    },
    {
      title: 'Undergraduate Teaching Assistant',
      company: 'UBC',
      date: 'Sept 2022 - May 2023',
      description: '"Led computer science lab sessions and provided guidance on circuits and advanced logic techniques. Addressed student inquiries and offered constructive feedback during office hours to support their learning and development.',
      image: teaching
    },
    {
      title: 'Youth Leader',
      company: 'The Arbutus Club',
      date: 'April 2022 - Aug 2024',
      description: 'Designed and led engaging activities for children and youth. Supervised groups during summer camp outings, ensuring adherence to camp rules and regulations while fostering a safe and enjoyable environment',
      image: leader
    },
    {
      title: 'Instructor',
      company: 'Geering Up Engineering Outreach',
      date: 'June 2022 - Aug 2022',
      description: 'Taught STEM topics to over 50 children and ensured they actively participated in lessons and activities. Produced 14 structured lessons plans catering to different themes targeting diverse learning goals',
      image: science
    },
    {
      title: 'Student Assistant',
      company: 'Burnaby School District',
      date: 'June 2020 - Aug 2021',
      description: 'Worked full-time for two summers to enhance safety measures for students at the start of the pandemic. Resolved health regulation issues as well as completed administrative tasks such as processing withdrawals and answering phone calls.',
      image: assistant
    },
    {
      title: 'Brand Ambassador',
      company: 'American Eagle Outfitters',
      date: 'Sept 2019 - Nov 2021',
      description: 'Drove sales by actively engaging with customers to understand their needs. Provided detailed product information, assisted with selections, and efficiently managed cash registers and fitting rooms.',
      image: clothes

    },
    {
      title: 'Cast Member',
      company: 'Cineplex Entertainment',
      date: 'June 2018 - Sept 2019',
      description: 'Organized and led birthday parties based on participant preferences. Prepared and served hot food, popcorn and Starbucks drinks. Operated and cleaned the frozen yourt machines and other equipment',
      image: worker
    },
  ]
  const slider = useRef();
  let tx = 0; // translateX
  const slideForward = () => {
    if (tx > - ((100/8)*6)) {
      tx -= 100/8;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 100/8;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='experiences'>
      <img src={next} alt="next" className='next-btn' onClick={slideForward}/>
      <img src={back} alt="back" className='back-btn' onClick={slideBackward} />

      <div className='slider'>
        <ul ref={slider}>
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
              <p>{Array.isArray(slide.description)
                    ? slide.description.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < slide.description.length - 1 && <><br /><br /></>}
                        </span>
                      ))
                    : slide.description}</p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Experiences