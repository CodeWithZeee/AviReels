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
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-10 md:right-10 rounded-2xl rotate-12">
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
            You already know you need video.
            <br />
            <span className="font-serif italic font-normal text-gray-700">
              So what's actually in the way?
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-600 text-lg sm:text-xl font-medium gilroy max-w-2xl mx-auto text-left list-none pl-0">
            <ul className="space-y-3 mb-8 list-none">
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> You hate how you look or sound on camera.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> You've filmed and deleted more times than you'll admit.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> Editing kills hours you don't have.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> You keep pushing content to tomorrow.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> You want to run video ads but production costs eat your margins.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> Your clients need video content but your team can't keep up with demand.</li>
              <li className="flex items-start gap-3"><span className="text-[#f5a623] mt-1">✦</span> Your competitors are posting every day. You're not.</li>
            </ul>

            <p className="font-bold text-gray-900 border-t border-black/10 pt-8 mt-8">
              That gap compounds. Every single day you're not showing up, someone else is owning your audience's attention.
            </p>
          </div>

          {/* Brand Footer / CTA */}
          <div className="pt-12 flex justify-center items-center gap-2">
            <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 hover:shadow-xl hover:shadow-black/20 active:scale-95 flex items-center justify-center gap-3 group">
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
