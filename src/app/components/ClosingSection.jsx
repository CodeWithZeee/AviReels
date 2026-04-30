"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      sectionRef.current.style.setProperty("--mouse-x", `${x}%`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden pt-32 pb-0 flex flex-col items-center"
    >
      {/* Animated radial glow that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-100 ease-linear"
        style={{
          background: `radial-gradient(ellipse 60% 50% at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,140,30,0.08) 0%, transparent 70%)`
        }}
      />

      {/* Static ambient glows */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,200,50,0.04)_0%,transparent_70%)] pointer-events-none blur-xl" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,100,50,0.03)_0%,transparent_70%)] pointer-events-none blur-xl" />

      {/* Grain texture using tailwind specific URL */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%] pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(2) infinite"
        }}
      />

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
          className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-bold clash leading-[1.05] text-white tracking-tight"
        >
          Your audience is<br className="hidden sm:block" />
          watching someone else
          <br className="hidden sm:block" />
          <em
            className="font-normal italic font-serif "
            style={{
              background: 'linear-gradient(135deg, #f5c842 0%, #e8821e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            right now.
          </em>
        </motion.h2>

        {/* Subline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
          className="text-white/50 text-[15px] sm:text-lg gilroy font-medium max-w-2xl mx-auto leading-relaxed space-y-4"
        >
          <p>We've delivered 60 million views. We've monetized YouTube channels in 75 days. We've built avatars so real that audiences can't tell the difference.</p>
          <p>Your category has attention to win. We'll engineer your presence inside it — without you ever going on camera.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.48 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button className="relative overflow-hidden bg-white text-[#111111] px-10 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-base md:text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(232,160,32,0.3)] group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5c842] to-[#e8a020] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">Book a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </button>

          <button className="bg-transparent text-white/80 border border-white/20 px-10 py-4 md:py-5 rounded-full font-bold clash tracking-wide text-base md:text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/60 hover:text-white hover:bg-white/5">
            See Client Results
          </button>
        </motion.div>

        {/* Scarcity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.62 }}
          className="text-[11px] md:text-xs text-white/30 uppercase tracking-widest font-bold clash"
        >
          We onboard a limited number of new clients each month.
          <br className="sm:hidden" />
          <span className="text-[#f5a623]/80 font-bold ml-2">30-day pilot</span>
          {" "}· No long-term commitment.
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
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(3%, 2%); }
          30% { transform: translate(-1%, 4%); }
          40% { transform: translate(4%, -1%); }
          50% { transform: translate(-3%, 3%); }
          60% { transform: translate(2%, -4%); }
          70% { transform: translate(-4%, 1%); }
          80% { transform: translate(1%, -2%); }
          90% { transform: translate(3%, 4%); }
        }
      `}} />
    </section>
  );
}