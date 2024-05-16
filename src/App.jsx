import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
     <div className='container'>
     <Title title='About Me'/>
     <About/>
     </div>
     <Title title='Services'/>
      <Services/>
     <div className='container'>
     <Title title='Skills'/>
     <Skills/>
     </div>
     <Title title='Professional Experience'/>
      <Experience/>
      <Title title='My Projects'/>
      <Projects/>
      <div className='container'>
     <Title title='Contact'/>
     <Contact/>
     </div>      
      <Footer/>
    
   </div>
  )
}

export default App

