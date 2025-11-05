import React from "react";
import BasicChips from "./ui/Chip";
import Image from "next/image";

const ClientResults2 = () => {
  return (
    <section className="flex flex-col relative lg:flex-row items-center justify-between  bg-[#efebe5] text-black px-4 lg:ml-16  max-w-full">
      {/* Left Side: Text and Button */}
      <div className="flex justify-center items-center w-full lg:w-auto  z-0">
        <Image 
        src="/Logo.png" 
        width={500} 
        height={500} 
        alt="Client Results" />
      </div>
      
      {/* Right Side */}
      <div className="flex flex-col items-start max-w-full sm:mt-4 mt-20 z-10 backdrop-blur-[2px] lg:max-w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <BasicChips label="Client Results" />
        <h1>Everybody.AI —</h1>
        <h1 className="font-bold leading-8">Tripled Engagement</h1>
        <h1>
          With <span className="font-bold">AviReels</span>
        </h1>
        <br />
        <p>
          “Our AI reels performed better than any of our traditional ads —
          faster, smarter, and more affordable. AvaReels is like having a
          creative studio on autopilot.”
        </p>
        <p>— Astrix Marketing Team</p>
        <br />
        <div className="flex gap-10">
          <div>
            <h1 className="font-bold">267K</h1>
            <h2 className="font-bold">Reel View</h2>
            <p className="font-gray-500">In the first 30 days</p>
          </div>
          <div>
            <h1 className="font-bold">259%</h1>
            <h2 className="font-bold">Engagemnet</h2>
            <p className="font-gray-500">Compared to previous month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults2;
