"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ClosingCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden pt-32 pb-0 flex flex-col items-center"
    >
      {/* Static premium ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_center,rgba(245,166,35,0.05)_0%,transparent_75%)]"
      />

      {/* Static ambient glows */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,200,50,0.03)_0%,transparent_70%)] pointer-events-none blur-xl" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,100,50,0.02)_0%,transparent_70%)] pointer-events-none blur-xl" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center space-y-12 pb-24 flex flex-col items-center">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.1em] uppercase text-white/50 backdrop-blur-md"
        >
          <span className="relative flex items-center justify-center w-2 h-2 mr-1">
            <span className="absolute inline-flex w-full h-full bg-[#f5a623] rounded-full opacity-75 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 bg-[#f5a623] rounded-full" />
          </span>
          Limited spots per month
        </motion.div>

        {/* Headline */}
<motion.h2
  initial={{ opacity: 0, y: 32 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
  className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold clash leading-[1.05] text-white tracking-tight"
>
  We are selective about{" "}
  <em
    className="font-normal italic font-serif block sm:inline-block"
    style={{
      background: 'linear-gradient(135deg, #f5c842 0%, #e8821e 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent'
    }}
  >
    who we work with.
  </em>
</motion.h2>
        {/* Subline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
          className="text-white/50 text-[15px] sm:text-lg gilroy font-medium max-w-2xl mx-auto leading-relaxed space-y-4"
        >
          <p>Four new clients a month. Chosen carefully. Given everything.</p>
          <p>Every day without a production system behind you is a day your competitors are posting, growing, and pulling further ahead. That gap does not pause while you decide. Four spots a month. Yours to take.</p>
          <p>60 million views. YouTube monetization in 75 days. $3,700 from a single sales video. AI avatars running across millions of views without one detection.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.48 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full pt-4"
        >
          <button
            data-calendly-trigger="true"
            className="relative overflow-hidden bg-white text-[#111111] px-10 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-base md:text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(232,160,32,0.3)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5c842] to-[#e8a020] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">Book a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </button>
        </motion.div>

        {/* Scarcity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.62 }}
          className="text-[11px] md:text-xs text-white/30 uppercase tracking-widest font-bold clash"
        >
          <span className="text-[#f5a623]/80 font-bold">4 spots per month</span>
          {" "}· 30-day pilot · No long-term commitment.
        </motion.p>
      </div>

      {/* Ticker */}
      <div className="w-full overflow-hidden border-y border-white/10 py-4 bg-white/[0.01]">
        <div className="flex w-max animate-scroll">
          {Array(2).fill([
            "Strategy First", "System Over Sporadic", "Engineered Distribution",
            "134M+ Views Delivered", "Daily Authority", "AI Video Infrastructure",
            "No Filming Required", "30-Day Pilot", "100% Repeat Client Rate",
            "Built to Compound", "Hyper-Real Avatars",
          ]).flat().map((item, i) => (
            <span key={i} className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 px-8 flex items-center clash whitespace-nowrap">
              {item} <span className="text-[#f5a623]/50 ml-16">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 35s linear infinite;
        }
      `}} />
    </section>
  );
}