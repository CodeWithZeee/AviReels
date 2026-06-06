"use client";

import { motion } from "framer-motion";

export default function WhatWeBuild() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="bg-[#111111] py-32 md:py-48 px-6 overflow-hidden relative">
      {/* Background grain or glow effect could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.05),transparent_50%)] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Pill */}
        <motion.div variants={fadeUp} className="mb-12">
          <span className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white/5 text-white/70 border border-white/10">
            What We Build
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.95] font-bold clash text-white mb-16 tracking-tight"
        >
          One company. <br />
          Any avatar. <br />
          <span className="font-serif italic font-normal text-[#f5a623] inline-block mt-2">
            Under 24 hours.
          </span>
        </motion.h2>

        {/* Storytelling Narrative */}
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.p variants={fadeUp} className="text-xl md:text-3xl text-white/90 leading-relaxed gilroy font-medium">
            AviReels is an AI-powered video production company that turns briefs into finished creatives before your competitors even schedule their shoot.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/60 leading-relaxed gilroy font-medium">
            Your likeness, your client's face, or a completely custom digital human. <strong className="text-white">Built from scratch. No filming required.</strong>
          </motion.p>
        </div>

        {/* The "Everything Included" Grid */}
        <motion.div variants={fadeUp} className="mt-24 md:mt-32 border-t border-white/10 pt-16">
          <h3 className="text-sm md:text-base font-bold clash text-white/40 uppercase tracking-[0.2em] mb-12">
            Everything handled end-to-end
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-left">
            <div className="border-l border-white/10 pl-6">
              <span className="block text-[#f5a623] font-serif italic text-2xl mb-2">01</span>
              <h4 className="text-white font-bold clash text-xl mb-2">Meta Ads</h4>
              <p className="text-white/50 text-sm gilroy leading-relaxed">High-converting ad creatives built to scale.</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <span className="block text-[#f5a623] font-serif italic text-2xl mb-2">02</span>
              <h4 className="text-white font-bold clash text-xl mb-2">Reels</h4>
              <p className="text-white/50 text-sm gilroy leading-relaxed">Daily vertical content to dominate Instagram.</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <span className="block text-[#f5a623] font-serif italic text-2xl mb-2">03</span>
              <h4 className="text-white font-bold clash text-xl mb-2">Shorts</h4>
              <p className="text-white/50 text-sm gilroy leading-relaxed">Platform-native formatting for YouTube.</p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <span className="block text-[#f5a623] font-serif italic text-2xl mb-2">04</span>
              <h4 className="text-white font-bold clash text-xl mb-2">VSLs</h4>
              <p className="text-white/50 text-sm gilroy leading-relaxed">Long-form sales letters that drive direct revenue.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-24 flex justify-center">
          <button
            data-calendly-trigger="true"
            className="bg-white text-[#111111] px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] active:scale-95 group flex items-center gap-3"
          >
            Book a Strategy Call
            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
