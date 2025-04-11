import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default App
