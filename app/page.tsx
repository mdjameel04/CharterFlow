import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PowefulFeatuers from './components/PowerfulFeatuers'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PowefulFeatuers/>
      <FAQ/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default page
