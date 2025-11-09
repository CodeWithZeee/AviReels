import React from 'react'
import BasicChips from './ui/Chip'
import ProcessFlow from './ProcessFlow'

const HWW = () => {
  return (
    <div className='centerit flex-col px-4 py-8 lg:py-12'>
       <BasicChips label="How we work" />
       <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">We like to keep things</h1>
       <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center"><span className="font-bold">nice</span> and <span className="font-bold">simple</span></h1>
         <ProcessFlow />
         <br />
        <h2 className="text-base sm:text-lg lg:text-xl text-center px-4">Delivery in 1-3 days. 100% done for you.</h2> 
    </div>
  )
}

export default HWW
