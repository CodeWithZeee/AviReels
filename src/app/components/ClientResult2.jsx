import React from "react";
import BasicChips from "./ui/Chip";
import Image from "next/image";

const ClientResults2 = () => {
  return (
    <section className="flex flex-col relative lg:flex-row items-center justify-between bg-[#efebe5] text-black px-4 lg:ml-16 max-w-full py-8 lg:py-12">
      {/* Left Side: Image */}
      <div className="flex justify-center items-center w-full lg:w-auto z-0 order-2 lg:order-1 mt-4 lg:mt-0">
        <Image 
        src="/Everybody.Ai.png" 
        width={500} 
        height={500} 
        alt="Client Results"
        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] object-contain" />
      </div>
      
      {/* Right Side */}
      <div className="flex flex-col items-center lg:items-start max-w-full sm:mt-4 mt-8 lg:mt-20 z-10 backdrop-blur-[2px] lg:max-w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4 lg:px-0 order-1 lg:order-2">
        <BasicChips label="Client Results" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">Everybody.AI —</h1>
        <h1 className="font-bold leading-8 text-2xl sm:text-3xl lg:text-4xl">Tripled Engagement</h1>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          With <span className="font-bold">AviReels</span>
        </h1>
        <br />
        <p className="text-sm sm:text-base lg:text-lg max-w-xl">
          "Our AI reels performed better than any of our traditional ads —
          faster, smarter, and more affordable. AvaReels is like having a
          creative studio on autopilot."
        </p>
        <p className="text-sm sm:text-base lg:text-lg">— Astrix Marketing Team</p>
        <br />
        <div className="flex gap-6 sm:gap-10 flex-wrap justify-center lg:justify-start">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">267K</h1>
            <h2 className="font-bold text-base sm:text-lg lg:text-xl">Reel View</h2>
            <p className="text-gray-500 text-sm sm:text-base">In the first 30 days</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">259%</h1>
            <h2 className="font-bold text-base sm:text-lg lg:text-xl">Engagemnet</h2>
            <p className="text-gray-500 text-sm sm:text-base">Compared to previous month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults2;
