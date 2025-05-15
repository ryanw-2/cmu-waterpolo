import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import Team from './components/Team/Team'
import Leadership from './components/Leadership/Leadership'
import Schedule from './components/Schedule/Schedule'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title='Our Team Culture'/>
        <Program/>
        <Team/>
        <Title title='Leadership'/>
        <Leadership/>
        <Title title='Practice Schedule'/>
        <Schedule/>
        <Title title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
