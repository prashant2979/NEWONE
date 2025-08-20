import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Navbar/Hero/Hero'
import About from './component/About/About'
import Skill from './component/Skills/Skill'
import Footer from './component/Footer/Footer'
import Contact from './component/Contact/Contact'
import Project from './component/Project/Project'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
