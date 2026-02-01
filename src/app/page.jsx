import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import OurMission from './components/OurMission'
import HWW from './components/HWW'
import Accordion from './components/FAQ'
import ClientResult from './components/ClientResult'
import Testimonial from './components/Testimonial'
import Comparison from './components/AgencyComparison'


const page = () => {
  return (
    <div>
      <Hero />
      <HWW />
      <Services />
      <ClientResult />
      <Testimonial />
      <OurMission />
      <Comparison />
      <Accordion />
    </div>
  )
}

export default page
