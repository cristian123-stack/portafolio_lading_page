import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 40px' }} />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Divider />
      <Footer />
    </>
  )
}
