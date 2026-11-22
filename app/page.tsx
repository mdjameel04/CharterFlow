import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PowefulFeatuers from './components/PowerfulFeatuers'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FinalCTA from './components/FinalCTA'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import WhyCharterFlow from './components/WhyChaterflow'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <PowefulFeatuers/>
      <WhyCharterFlow/>
      <Testimonials/>
      <Pricing/>
      <Integrations/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default page
