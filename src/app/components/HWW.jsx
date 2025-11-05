import React from 'react'
import BasicChips from './ui/Chip'
import ProcessFlow from './ProcessFlow'

const HWW = () => {
  return (
    <div className='centerit flex-col'>
       <BasicChips label="How we work" />
       <h1>We like to keep things</h1>
       <h1><span>nice</span> and <span>simple</span></h1>
         <ProcessFlow />
         <br />
        <h2>Delivery in 1-3 days. 100% done for you.</h2> 
    </div>
  )
}

export default HWW
