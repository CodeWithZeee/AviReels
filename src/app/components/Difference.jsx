"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Comparison() {
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
    <section className="bg-[#F4F2EC] px-6 py-32 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.h2
            variants={fadeUp}
            className="text-[3rem] sm:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold clash text-[#111111]"
          >
            The alternative costs more <br className="hidden md:block" />
            and delivers less.
          </motion.h2>
        </div>

        {/* PART A: Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-16">
          {/* Traditional Production */}
          <motion.div
            variants={fadeUp}
            className="bg-[#EBE9E4]/60 rounded-[3rem] p-10 md:p-14 opacity-80 border border-black/5 flex flex-col h-full hover:opacity-100 transition-opacity duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#A8A6A1] clash mb-10 text-center">
              Traditional Production
            </h3>

            <ul className="space-y-6 text-[#9CA3AF] font-medium gilroy text-base md:text-lg flex-1">
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">You film. They edit.</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">7 to 14 day production cycle</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">You manage posting and scheduling</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Volume without a clear business outcome</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Long-term contracts before you see results</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Higher cost per creative</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Inconsistent quality at scale</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Revisions take days</span></li>
            </ul>
          </motion.div>

          {/* AviReels */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/5 flex flex-col h-full transform transition-all duration-300 relative z-10"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <h3 className="text-3xl md:text-4xl font-bold clash text-[#111111]">AviReels</h3>
            </div>

            <ul className="space-y-6 font-bold text-[#111111] gilroy text-base md:text-lg flex-1">
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Fully managed. Zero effort on your side.</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Finished creatives in under 24 hours</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Strategy-first. Every asset tied to a real outcome.</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Any avatar. Any format. Any volume.</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">30-day pilot before any long-term commitment</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Fraction of the cost of traditional production</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Consistent quality built to perform at scale</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Meta Ads, Reels, Shorts, VSLs and long-form covered</span></li>
            </ul>
          </motion.div>
        </div>

        {/* Cost Breakdown */}
        <motion.div variants={fadeUp} className="max-w-5xl mx-auto mb-32 text-center px-4">
          <p className="text-sm md:text-base text-gray-500 font-medium gilroy">
            Building this in-house would cost: Videographer ($4K to $8K/mo) + Social Manager ($4K to $7K/mo) + Studio production ($2K to $5K/shoot) + Strategist ($5K to $10K/mo). AviReels delivers all of it, fully managed, at a fraction of that.
          </p>
        </motion.div>

        {/* PART B: Speed */}
        <div className="max-w-5xl mx-auto mb-32 border-t border-black/10 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div variants={fadeUp}>
              <h4 className="text-xl md:text-2xl font-bold text-gray-400 clash mb-6 uppercase tracking-wider">Traditional Production</h4>
              <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
                Expensive. Slow. Brief on Monday. Casting, scheduling, filming, editing, revisions. Creative delivered the following Monday, if everything goes perfectly.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="text-xl md:text-2xl font-bold text-[#111111] clash mb-6 uppercase tracking-wider">AviReels</h4>
              <p className="text-lg md:text-xl text-gray-900 gilroy font-bold leading-relaxed">
                Brief today. Finished creative delivered tomorrow. Already testing while everyone else is still coordinating the shoot.
              </p>
            </motion.div>
          </div>
        </div>

        {/* PART C: Quality */}
        <div className="max-w-5xl mx-auto border-t border-black/10 pt-20">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <h4 className="text-sm font-bold text-gray-400 clash mb-4 uppercase tracking-widest text-center">Typical AI Avatar</h4>
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* [PLACEHOLDER A] */}
                <div className="text-gray-400 text-sm font-bold tracking-widest uppercase">[Placeholder A]</div>
              </div>
            </div>
            
            <div className="shrink-0">
              <span className="text-xl font-bold text-gray-300 italic gilroy">vs</span>
            </div>
            
            <div className="w-full md:w-1/2">
              <h4 className="text-sm font-bold text-[#111111] clash mb-4 uppercase tracking-widest text-center">AviReels</h4>
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* [PLACEHOLDER B] */}
                <div className="text-gray-400 text-sm font-bold tracking-widest uppercase">[Placeholder B]</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
              Speed means nothing if the creative looks artificial. Realism is the standard every asset is built to. Skin texture, hair, lighting and movement produced to hold up across millions of views without a single detection.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center">
            {/* Raw WhatsApp screenshot */}
            <div className="w-full max-w-lg mb-6">
              <Image src="/Image_3_Ser.png" alt="Ser WhatsApp Reaction" width={800} height={400} className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-500 italic gilroy mb-12">
              Real client. First reaction. Unedited.
            </p>

            <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 flex items-center justify-center gap-3 group">
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

/* Icon helpers */
function IconX() {
  return (
    <div className="bg-[#9CA3AF] rounded-full p-1 shrink-0 mt-0.5">
      <X className="w-3.5 h-3.5 text-white" />
    </div>
  );
}

function IconCheck() {
  return (
    <div className="bg-[#111111] rounded-full p-1 shrink-0 mt-0.5 shadow-sm">
      <Check className="w-4 h-4 text-white" />
    </div>
  );
}
