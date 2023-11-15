import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Hero } from '../components/HeroSection/Hero'
import { Cards } from '../components/Cards/Cards'
import { Tools } from '../components/Offerr-Tools/Tools'
import { Help } from '../components/Help/Help'
import { HowFunction } from '../components/functions-how/HowFunction'
import { Vision } from '../components/Vision/Vision'
import { Testmonilas } from '../components/Testimonials/Testmonilas'
import Clients from '../components/Clients/Clients'
import Footer from '../components/Footer/Footer'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tools />
      <Cards />
      <Help />
      {/* <Vision /> */}
      <HowFunction />
      <Testmonilas />
      <Clients />
      <Footer />
    </>
  )
}
