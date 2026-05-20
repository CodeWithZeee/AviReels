"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="bg-[#F4F2EC] pt-28 sm:pt-36 pb-20 md:pb-28 relative overflow-hidden flex items-center min-h-[90vh]">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[#111111] clash leading-[1.05] tracking-tight text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] font-bold"
            >
              That's Not a <br className="hidden sm:block" /> Real Person.
            </motion.h1>

            {/* Subtext */}
            <motion.div
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-medium gilroy space-y-4"
            >
              <p>
                What you just watched was ready in under 24 hours. <br className="hidden lg:block" />
                <span className="font-bold text-gray-800">No filming. No actors. No studio.</span>
              </p>
              <p>
                While the rest of the market is still setting up the shoot, this is already live.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6"
            >
              <button className="relative overflow-hidden bg-[#111111] text-white px-8 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-lg sm:text-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group flex items-center justify-center w-full sm:w-auto shadow-md border border-black/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5c842]/20 to-[#e8821e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book a Strategy Call
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#f5a623] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <button className="bg-white/50 backdrop-blur-sm text-gray-900 px-8 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-lg sm:text-xl border-2 border-black/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/30 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] active:scale-95 flex items-center justify-center w-full sm:w-auto">
                See Real Results
              </button>
            </motion.div>
          </div>

          {/* Right Column: Large Vertical Mobile Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 order-1 lg:order-2">
            {/* Phone Container Wrapper */}
            <div className="relative mx-auto lg:mr-0 group">
              {/* Phone Buttons (Physical keys) */}
              <div className="absolute -left-[10px] sm:-left-[14px] top-24 w-[2px] sm:w-[3px] h-8 bg-neutral-800 rounded-l-md" />
              <div className="absolute -left-[10px] sm:-left-[14px] top-36 w-[2px] sm:w-[3px] h-8 bg-neutral-800 rounded-l-md" />
              <div className="absolute -right-[10px] sm:-right-[14px] top-28 w-[2px] sm:w-[3px] h-12 bg-neutral-800 rounded-r-md" />

              {/* Main Phone Body (Enlarged) */}
              <motion.div 
                variants={fadeUp} 
                className="w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] lg:w-[380px] xl:w-[420px] aspect-[9/16] relative rounded-[2.5rem] sm:rounded-[3.2rem] border-[10px] sm:border-[14px] border-neutral-950 bg-black shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-4.5 bg-neutral-950 rounded-full z-20 pointer-events-none" />

                {/* Speaker Grill Detail inside Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-neutral-800 z-30 pointer-events-none" />

                {/* Reflection Highlight / Glass Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />

                {/* Fallback placeholder (visible if video loads slowly or fails) */}
                <div className="absolute inset-0 bg-neutral-900 z-0 flex items-center justify-center" />
                <span className="text-white/20 font-bold clash tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center px-4 absolute z-0 leading-relaxed">
                  Loading Demo...
                </span>
                
                {/* Actual Video compilation */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  src="/videos/MobileVideo.mp4" 
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
