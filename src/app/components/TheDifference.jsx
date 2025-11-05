import React from 'react'
import BasicChips from './ui/Chip'
import AgencyComparison from './AgencyComparison'

const TheDifference = () => {
  return (
    <div className='centerit flex-col mt-18'>
      <BasicChips label="The Difference" />
      <h1>See <span className='font-bold'>why</span> brands</h1>
      <h1>Switch to <span className='font-bold'>AviReels</span></h1>
      <AgencyComparison />
    </div>
  )
}

export default TheDifference
