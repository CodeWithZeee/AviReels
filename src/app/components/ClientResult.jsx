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
    <div className="bg-[#F4F2EC] py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-20 md:mb-32">
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold clash text-[#111111]">
            Built for three <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-gray-800">kinds of growth.</span>
          </h2>
        </motion.div>

        {/* BLOCK 1: AGENCIES AND PERFORMANCE MARKETERS */}
        <motion.div variants={fadeUp} className="mb-24 pb-24 border-b border-black/10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold clash text-[#111111] mb-6 leading-tight">
              High-converting creatives. Delivered before your competitors finish their brief.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
              The brands winning on Meta are running dozens of creative variations at once. You know the strategy. AviReels gives you the production volume to execute it. Full creative batches, multiple hooks, multiple formats, ready to upload in under 24 hours.
            </p>
          </div>
          
          {/* Raw Screenshot */}
          <div className="w-full max-w-lg mx-auto mb-10">
            <Image src="/Image_4_Elevate.png" alt="Elevate VSLs Reaction" width={800} height={400} className="w-full h-auto" />
          </div>

          <div className="flex justify-center">
            <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-95">
              Book a Strategy Call
            </button>
          </div>
        </motion.div>

        {/* BLOCK 2: CREATORS AND PERSONAL BRANDS */}
        <motion.div variants={fadeUp} className="mb-24 pb-24 border-b border-black/10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold clash text-[#111111] mb-6 leading-tight">
              You have something to say. But posting has been the hard part.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
              Drop your ideas, your angles, your talking points. Everything after that is handled. Your avatar goes up every day while your time stays on everything else your business actually needs from you.
            </p>
          </div>
          
          {/* Raw Screenshots */}
          <div className="flex flex-col items-center gap-8 mb-10">
            <div className="w-full max-w-lg">
              <Image src="/Image_1_Brandon.png" alt="Brandon Reaction" width={800} height={400} className="w-full h-auto" />
            </div>
            <div className="w-full max-w-lg">
              <Image src="/Image_2_Jake.png" alt="Jake Reaction" width={800} height={400} className="w-full h-auto" />
            </div>
            <div className="w-full max-w-lg">
              <Image src="/Image_5_Natalie.png" alt="Natalie Reaction" width={800} height={400} className="w-full h-auto" />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-95">
              Book a Strategy Call
            </button>
          </div>
        </motion.div>

        {/* BLOCK 3: AGENCIES WITH WHITE-LABEL NEEDS */}
        <motion.div variants={fadeUp}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold clash text-[#111111] mb-6 leading-tight">
              Your clients get the output. We stay invisible.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
              Scripts, avatars, editing, and formatting delivered under your brand in under 24 hours. Your clients see polished output. They never see us. Your margins stay intact and your timelines stop slipping.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-transparent text-gray-900 border-2 border-black/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:border-[#171717] hover:bg-[#171717]/5 active:scale-95">
              Let's Talk White-Label
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ClientResult;
