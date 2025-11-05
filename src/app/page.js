import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import OurMission from './components/OurMission'
import ClientResults from './components/ClientResults'
import ClientResults2 from './components/ClientResult2'
import HWW from './components/HWW'

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <OurMission />
      <ClientResults />
      <ClientResults2 />
      <HWW />
    </div>
  )
}

export default page
