import ServiceCard from "./ui/ServiceCards";

export default function WhatWeBuild() {
  return (
    <section className="bg-[#F4F2EC] py-4 px-6">
        <div className="flex items-center justify-center">
          {/* Pill */}
          <div className="pill">What We Build</div>
        </div>  
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">

          {/* Title */}
          <h1 className="text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] leading-[1.1] font-semibold text-black mb-8">
            The Infrastructure Behind Daily{" "}
            <span className="font-serif italic font-normal">Authority.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We don't sell formats. We build systems. Every output is engineered
            to compound, convert, and distribute across the platforms where your
            audience lives.
          </p>
        </div>

        {/* Cards */}
        <ServiceCard />
      </div>
    </section>
  );
}
