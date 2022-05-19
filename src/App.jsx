import React from 'react'
import { Header } from './components/header/Header'
//import { Nav } from './components/header/nav/Nav'
import { About } from './components/about/About'
import { Portfolio } from './components/portfolio/Portfolio'
import { Footer } from './components/footer/Footer'
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';

export const App = () => {
  return (

    <>
      <Header />
      <Contact/>
      <Experience/>
    
      <Footer />
      {/*

      <About />
      <Portfolio />
  */}
    </>

  )
}
