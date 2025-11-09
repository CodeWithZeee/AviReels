import React from 'react'
import BasicChips from './ui/Chip'
import AgencyComparison from './AgencyComparison'

const TheDifference = () => {
  return (
    <div className='centerit flex-col mt-8 lg:mt-18 px-4 py-8 lg:py-12'>
      <BasicChips label="The Difference" />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">See <span className='font-bold'>why</span> brands</h1>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">Switch to <span className='font-bold'>AviReels</span></h1>
      <AgencyComparison />
    </div>
  )
}

export default TheDifference
