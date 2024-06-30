import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <About />
        <Title subTitle='Portfolio' title='Projects '/>
        <Projects />
        <Title subTitle='Slideshow' title='Experiences '/>
      </div>
    </div>
  )
}

export default App