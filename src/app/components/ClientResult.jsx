"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ClientResult = () => {
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
    <div className="bg-[#F4F2EC] py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="flex items-center justify-center mb-16">
          <div className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-800 border border-black/5">
            Our Services
          </div>
        </motion.div>

        {/* SERVICE 1 */}
        <motion.div variants={fadeUp} className="mb-32 border-b border-black/10 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="text-center lg:text-left flex flex-col justify-center h-full">
              <div className="uppercase text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-500 mb-4">
                Service 1: For Creators & Personal Brands
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-bold mb-6 text-[#111111] clash">
                You want to build an audience.<br />
                <span className="italic font-normal text-gray-800">The camera is in the way.</span>
              </h2>
              <p className="text-[15px] sm:text-lg text-gray-600 font-medium gilroy max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                You have something to say. You know you need to show up on Instagram and YouTube consistently. But the camera is a wall — you're uncomfortable, you're busy, or the process of filming and editing every reel just never gets done.<br /><br />
                We build your AI avatar and run your entire content operation. Daily posts. Real growth. Platform-native content engineered to stop the scroll and build your audience. You never step in front of a camera.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
                <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                  Book a Strategy Call
                  <svg className="w-5 h-5 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-6 mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-auto w-full max-w-[400px]">
                <Image src="/Image_1_Brandon.png" alt="Brandon Reaction" width={400} height={200} className="w-full h-auto object-contain" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-auto w-full max-w-[400px]">
                <Image src="/Image_2_Jake.png" alt="Jake Reaction" width={400} height={200} className="w-full h-auto object-contain" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-auto w-full max-w-[400px]">
                <Image src="/Image_5_Natalie.png" alt="Natalie Reaction" width={400} height={200} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SERVICE 2 */}
        <motion.div variants={fadeUp} className="mb-32 border-b border-black/10 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="lg:order-2 text-center lg:text-left flex flex-col justify-center h-full">
              <div className="uppercase text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-500 mb-4">
                Service 2: For Businesses & Advertisers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-bold mb-6 text-[#111111] clash">
                Video ads that convert.<br />
                <span className="italic font-normal text-gray-800">No production budget required.</span>
              </h2>
              <p className="text-[15px] sm:text-lg text-gray-600 font-medium gilroy max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                You need video ads and VSLs that perform — without the cost, timeline, and coordination of traditional production. We produce AI avatar ad creatives and sales videos indistinguishable from real footage.<br /><br />
                Higher CTR. Lower cost per view. Built to scale.<br /><br />
                Our AI avatar VSL generated <strong className="text-black">$3,700 in direct sales</strong> for a single client. The creative outperformed their existing traditional ads from day one.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
                <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                  Book a Strategy Call
                  <svg className="w-5 h-5 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:order-1 flex flex-col items-center lg:items-start gap-6 mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-auto w-full max-w-[400px]">
                <Image src="/Image_4_Elevate.png" alt="Elevate VSLs Reaction" width={400} height={200} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SERVICE 3 */}
        <motion.div variants={fadeUp}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="text-center lg:text-left flex flex-col justify-center h-full">
              <div className="uppercase text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-500 mb-4">
                Service 3: For Agencies
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-bold mb-6 text-[#111111] clash">
                Your clients need video.<br />
                <span className="italic font-normal text-gray-800">We're your silent production partner.</span>
              </h2>
              <p className="text-[15px] sm:text-lg text-gray-600 font-medium gilroy max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                You're already selling social media management or video content to clients. But production is the bottleneck. Hiring is expensive. Turnaround is slow. Quality is inconsistent.<br /><br />
                We become the engine behind your operation.<br /><br />
                White-label AI avatar content delivered in 1-3 days. Your branding. Your client relationship. Your margins. We handle scripting, avatar production, editing, and formatting. You deliver and take the credit.<br /><br />
                No overhead. No hiring. No delays. One agency partnership typically unlocks 5-10 clients from a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
                <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                  Let's Talk White-Label
                  <svg className="w-5 h-5 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            {/* No screenshot specified for Agencies */}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ClientResult;
