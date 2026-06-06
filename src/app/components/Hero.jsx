"use client";

import { motion } from "framer-motion";
import PremiumPhoneMockup from "./ui/PremiumPhoneMockup";

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
              <button
                data-calendly-trigger="true"
                className="relative overflow-hidden bg-[#111111] text-white px-8 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-lg sm:text-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group flex items-center justify-center w-full sm:w-auto shadow-md border border-black/10"
              >
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
            <PremiumPhoneMockup videoSrc="/videos/MobileVideo.mp4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
