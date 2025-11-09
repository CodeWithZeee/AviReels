import React from 'react'

const Leftside = () => {
  return (
    <div>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center lg:items-start px-4 lg:px-0 lg:pl-20 space-y-4 lg:space-y-8 mt-20 lg:mt-44 max-w-xl mx-auto lg:mx-0">
        <p className="text-4xl sm:text-5xl lg:text-7xl flex flex-col text-center lg:text-left">
          AI Videos That
          <span className="font-black">Tell & Sell</span>
        </p>
        <h2 className="text-gray-500 text-base sm:text-lg lg:text-xl text-center lg:text-left px-4 lg:px-0">
          We create ultra-realistic AI Videos and Reels — featuring lifelike
          Avatars, Animated Characters, or Both — designed to hook instantly,
          tell your story, and grow your brand effortlessly.
        </h2>
        <button
          //   onClick={
          //     () => window.open("https://calendly.com/your-link", "_blank")
          //   }
          className="rounded-full bg-black text-white border-2 px-6 py-3 lg:p-4 text-sm lg:text-base hover:scale-110 transition-all duration-300 w-full sm:w-auto"
        >
          Book a Free Strategy Call
        </button>
      </div>
    </div>
  )
}

export default Leftside
