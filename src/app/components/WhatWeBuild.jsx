"use client";

import { motion } from "framer-motion";

export default function WhatWeBuild() {
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
    <section className="bg-[#F4F2EC] py-20 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">

          {/* Pill */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-800 border border-black/5">
              What We Build
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-[3rem] sm:text-[4rem] md:text-[4.75rem] leading-[1.05] font-bold clash text-[#111111] mb-8"
          >
            One system. Every format. <br />
            <span className="font-serif italic font-normal text-gray-800">Zero filming.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.div
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed gilroy font-medium space-y-5 px-4"
          >
            <p>We build a hyper-real AI avatar of you — your face, your voice, your presence — and produce everything from the ground up.</p>
            <p className="font-bold text-gray-800 text-2xl">Script. Avatar. Edit. Deliver. Repeat.</p>
            <p>Whether you're a creator building a personal brand, a coach who needs to show up without being tied to a camera, a business running ads that need to convert, or an agency that needs reliable white-label production — the system is the same.</p>
            <p className="font-bold text-gray-800">You send ideas. We send content. You grow.</p>

            <button className="bg-[#171717] text-white px-8 py-4 mt-8 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 flex items-center justify-center gap-3 group mx-auto">
              Book a Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
