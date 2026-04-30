"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";

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
    <section className="bg-[#F4F2EC] pt-40 md:pt-48 pb-20 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center md:text-left">

            {/* Eyebrow Tag */}
            <motion.div variants={fadeUp}>
              <span className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-800 border border-black/5">
                Authority Infrastructure for AI Video
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-[#111111] clash leading-[1.05] tracking-tight
              text-[3rem] sm:text-[3.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold"
            >
              The World Pays Attention to People Who Show Up. <br />
              <span className="font-serif italic font-normal text-gray-800 relative inline-block mt-2">
                Most Never Do.
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.div
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium gilroy space-y-4"
            >
              <p>Not because they lack something to say.</p>
              <p className="font-bold text-gray-800">
                Because filming is uncomfortable. Editing takes hours. And showing up consistently feels impossible when life doesn't stop.
              </p>
              <p>
                AviReels builds your hyper-real AI avatar and runs your entire video presence — Instagram, YouTube, VSLs, ad creatives — so you show up every single day without ever stepping in front of a camera.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <button className="relative overflow-hidden bg-[#111111] text-white px-8 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-lg sm:text-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(232,160,32,0.2)] group flex items-center justify-center w-full sm:w-auto shadow-md border border-black/10">
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

            <motion.div variants={fadeUp} className="pt-4">
              <p className="text-xs md:text-[13px] text-gray-500 w-full text-center leading-relaxed font-bold uppercase tracking-[0.1em]">
                <span className="block">Trusted by founders and fast-growing brands.</span>
                <span className="block my-1">
                  <span className="mx-3 text-black/20">•</span>
                  <span className="text-gray-800">30-day pilot</span>
                  <span className="mx-3 text-black/20">•</span>
                </span>
                <span className="block">No long-term commitment.</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <motion.div variants={fadeUp} className="relative flex justify-center md:justify-end">
            <div
              className="relative w-[320px] h-[640px] sm:w-[340px] sm:h-[680px] md:w-[360px] md:h-[720px] rounded-[3.5rem] border-[14px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden bg-black group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-gray-900 transition-transform duration-700" />

              {/* Decorative Glow */}
              <div className="absolute -inset-20 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[60px] pointer-events-none opacity-50 mix-blend-screen group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Status bar notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-white rounded-b-3xl z-20" />

              {/* Story header */}
              <div className="absolute top-12 left-6 flex items-center gap-3 z-10 text-white w-full pr-12">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f5a623] to-[#d31027] p-[2px]">
                  <div className="w-full h-full bg-white rounded-full overflow-hidden border border-black flex items-center justify-center">
                    <span className="text-[10px] text-black font-bold clash">AR</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-wide leading-tight">AviReels</span>
                  <span className="text-[10px] text-white/60 font-semibold tracking-wider uppercase">Visual Demo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
