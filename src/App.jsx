import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Experiences from './Components/Experiences/Experiences'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

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
        <Experiences />
        <Title subTitle='Contact Me' title='Get in Touch '/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App