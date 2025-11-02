import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import OurMission from './components/OurMission'
import ClientResults from './components/ClientResults'

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <OurMission />
      <ClientResults />
    </div>
  )
}

export default page
