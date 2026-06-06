"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function PremiumPhoneMockup({ videoSrc }) {
  const containerRef = useRef(null);

  // Motion values for tracking cursor relative coordinates (from 0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Transform cursor position into degrees of rotation (up to 12 degrees tilt)
  const rotateX = useTransform(y, [0, 1], [12, -12]);
  const rotateY = useTransform(x, [0, 1], [-12, 12]);

  // Translate reflection coordinates for dynamic glare effect
  const glareX = useTransform(x, [0, 1], [-20, 20]);
  const glareY = useTransform(y, [0, 1], [-20, 20]);

  // Translate ambient aura glow coordinates slightly opposite to create depth
  const glowX = useTransform(x, [0, 1], [15, -15]);
  const glowY = useTransform(y, [0, 1], [15, -15]);

  // Buttery-smooth spring physics configurations
  const springConfig = { damping: 28, stiffness: 120, mass: 1.2 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothGlareX = useSpring(glareX, springConfig);
  const smoothGlareY = useSpring(glareY, springConfig);
  const smoothGlowX = useSpring(glowX, springConfig);
  const smoothGlowY = useSpring(glowY, springConfig);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Reset to flat/centered position when cursor leaves
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center select-none"
      style={{ perspective: "1500px" }} // Essential for realistic 3D angles
    >
      {/* 1. Ambient Background Backlight Glow (Pulsing warm orange aura) */}
      <motion.div
        className="absolute w-[110%] h-[110%] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.15),transparent_65%)] blur-3xl pointer-events-none z-0"
        style={{
          x: smoothGlowX,
          y: smoothGlowY,
        }}
      />

      {/* 2. Interactive 3D Phone Body */}
      <motion.div
        className="relative w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] lg:w-[360px] xl:w-[385px] aspect-[9/19.5] rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 group cursor-pointer"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Metal Side Button Details (Floating outside the bezel for premium realism) */}
        {/* Left Side: Volume & Action Keys */}
        <div className="absolute -left-[4px] top-[18%] w-[4px] h-[5%] bg-gradient-to-r from-neutral-800 to-neutral-600 border border-neutral-700/80 rounded-l-md shadow-md z-10" />
        <div className="absolute -left-[4px] top-[26%] w-[4px] h-[9%] bg-gradient-to-r from-neutral-800 to-neutral-600 border border-neutral-700/80 rounded-l-md shadow-md z-10" />
        <div className="absolute -left-[4px] top-[37%] w-[4px] h-[9%] bg-gradient-to-r from-neutral-800 to-neutral-600 border border-neutral-700/80 rounded-l-md shadow-md z-10" />

        {/* Right Side: Lock/Side Button */}
        <div className="absolute -right-[4px] top-[28%] w-[4px] h-[13%] bg-gradient-to-l from-neutral-800 to-neutral-600 border border-neutral-700/80 rounded-r-md shadow-md z-10" />

        {/* Outer Titanium Rim (Gives the shiny metallic border edge) */}
        <div className="absolute inset-0 border border-neutral-600/50 bg-gradient-to-br from-neutral-700 via-neutral-900 to-neutral-800 rounded-[3rem] p-[3px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] z-20">
          
          {/* Inner Screen Bezel (Matte black screen boundary) */}
          <div className="relative w-full h-full border-[10px] sm:border-[12px] border-neutral-950 rounded-[2.8rem] bg-neutral-950 overflow-hidden flex items-center justify-center">
            
            {/* Speaker Ear Piece Grill (Microscopic line at top) */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-neutral-800 rounded-full z-40 pointer-events-none" />

            {/* Dynamic Island Capsule */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0a0a0a] rounded-full z-40 flex items-center justify-between px-3.5 pointer-events-none border border-neutral-900/50 shadow-inner">
              {/* Simulated Camera Lens reflection */}
              <div className="w-3.5 h-3.5 rounded-full bg-radial-gradient(circle_at_center, #1a2c3a_0%, #03080e_80%) relative flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 blur-[0.5px]" />
              </div>
              
              {/* Tiny Amber Recording Dot detail */}
              <div className="w-1 h-1 rounded-full bg-orange-500/80 animate-pulse mr-1" />
            </div>

            {/* 3. Screen Content Frame */}
            <div className="absolute inset-0 w-full h-full bg-black z-10 rounded-[2.1rem] overflow-hidden">
              {/* Video Loading Placeholder */}
              <div className="absolute inset-0 bg-neutral-900 z-0 flex items-center justify-center" />
              <span className="text-white/20 font-bold clash tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center px-4 absolute z-0 leading-relaxed">
                Loading Demo...
              </span>

              {/* High-Fidelity Comp Video */}
              {videoSrc && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  src={videoSrc}
                />
              )}

              {/* 4. Realistic Curved Glass Glare & Reflection Sweep Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.12] pointer-events-none z-30"
                style={{
                  translateX: smoothGlareX,
                  translateY: smoothGlareY,
                }}
              />
              
              {/* Simulated diagonal light glare shine (adds high-end gloss feel) */}
              <div className="absolute -inset-[100%] w-[300%] h-[300%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.06)_50%,transparent_55%)] pointer-events-none z-30 opacity-70" />
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
