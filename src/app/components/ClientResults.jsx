import React from 'react'
import BasicChips from './ui/Chip'

const ClientResults = () => {
  return (
     <section className="flex flex-col relative lg:flex-row items-center justify-between  bg-[#efebe5] text-black px-4 lg:ml-16  max-w-full">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col items-start max-w-full sm:mt-4 mt-20 z-10 backdrop-blur-[2px] lg:max-w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <BasicChips label="Client Results" />
        <h1>Astrix Media —</h1>
        <h1 className='font-bold leading-8'>Tripled Engagement</h1>
      </div>
      {/* Right Side */}
      <div className="flex justify-center items-center w-full lg:w-auto absolute absoluteCenter z-0">

      </div>
    </section>
  )
}

export default ClientResults
