'use client'
import { Aperture } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 pt-8">
        <motion.div
          className="bg-[#FBFAF7] rounded-[2.5rem] p-8 sm:p-12 md:p-20 shadow-2xl overflow-hidden relative border border-black/5 flex flex-col gap-8 lg:gap-16 items-center lg:items-start">
          {/* Floating Icon */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-10 md:right-10 rounded-2xl">
            {/* <Aperture className="w-6 h-6" /> */}
            <Image
              src="/Logo.png"
              alt="Aperture Icon"
              width={124}
              height={124}
              className="w-24 h-24 sm:w-20 sm:h-20 md:w-31 md:h-31"
            />
          </div>

          {/* Pill */}
          <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-10">
            The Problem
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold clash text-[#111111] mb-10 leading-[1.05] tracking-tight">
            The idea is never the problem. <br />
            <span className="font-serif italic font-normal text-gray-700">
              Getting it made is.
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-600 text-lg sm:text-xl font-medium gilroy max-w-3xl text-left pl-0 leading-relaxed">
            <p>
              If you run ads on Meta, you know the ceiling. Not enough creatives in market, UGC creators taking two weeks per batch, and by the time the assets land, the window has already shifted.
            </p>
            <p>
              If you are building a personal brand, you know what happens when filming gets pushed. One week becomes one month. Your competitors keep posting. You keep planning.
            </p>
            <p>
              And if you need video production for your business or your clients, you already know what a traditional production quote looks like. Expensive. Slow. Built for a world that no longer moves at this speed.
            </p>
            <p className="font-bold text-gray-900 border-t border-black/10 pt-8 mt-8">
              This is the problem AviReels was built to eliminate.
            </p>
          </div>

          {/* Brand Footer / CTA */}
          <div className="pt-12 flex justify-center items-center gap-2">
            <button
              data-calendly-trigger="true"
              className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 hover:shadow-xl hover:shadow-black/20 active:scale-95 flex items-center justify-center gap-3 group"
            >
              Book a Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
