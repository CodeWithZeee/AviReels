import React from 'react'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import OurMission from './components/OurMission'
import HWW from './components/HWW'
import Accordion from './components/FAQ'
import ClientResult from './components/ClientResult'
import Testimonial from './components/Testimonial'
import Comparison from './components/AgencyComparison'
import StatWall from './components/StatWall'
import SocialProofRibbon from './components/SocialProofRibbon'


const page = () => {
  return (
    <div>
      <Hero />
      <StatWall />
      <SocialProofRibbon />
      <HWW />
      <WhatWeBuild />
      <ClientResult />
      <Testimonial />
      <OurMission />
      <Comparison />
      <Accordion />
    </div>
  )
}

export default page
