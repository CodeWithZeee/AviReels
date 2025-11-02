import React from 'react'

const Leftside = () => {
  return (
    <div>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start lg:px-0 lg:pl-20 space-y-6 lg:space-y-8 mt-44 max-w-xl">
        <p className="text-7xl flex flex-col">
          AI Videos That
          <span className="font-black">Tell & Sell</span>
        </p>
        <h2 className="text-gray-500">
          We create ultra-realistic AI Videos and Reels — featuring lifelike
          Avatars, Animated Characters, or Both — designed to hook instantly,
          tell your story, and grow your brand effortlessly.
        </h2>
        <button
          //   onClick={
          //     () => window.open("https://calendly.com/your-link", "_blank")
          //   }
          className="rounded-full bg-black text-white border-2 p-4 hover:scale-110 transition-all duration-300"
        >
          Book a Free Strategy Call
        </button>
      </div>
    </div>
  )
}

export default Leftside
