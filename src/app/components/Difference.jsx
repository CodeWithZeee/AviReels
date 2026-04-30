"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import CostBreakdown from "./ui/CostBreakdown";

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
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-800 border border-black/5">
              The difference
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[3rem] sm:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold clash text-[#111111]"
          >
            The alternative costs more <br className="hidden md:block" />
            and delivers less.{" "}
          </motion.h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-20">
          {/* Other Agencies */}
          <motion.div
            variants={fadeUp}
            className="bg-[#EBE9E4]/60 rounded-[3rem] p-10 md:p-14 opacity-80 border border-black/5 flex flex-col h-full hover:opacity-100 transition-opacity duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#A8A6A1] clash mb-10 text-center">
              Other Agencies
            </h3>

            <ul className="space-y-6 text-[#9CA3AF] font-medium gilroy text-base md:text-lg flex-1">
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">You film. They edit</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Slow production cycle</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">You manage posting and scheduling</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Content without distribution strategy</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Volume without a clear business outcome</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Long-term contracts before you see results</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">No AI. Higher cost per video</span></li>
              <li className="flex items-start gap-4"><IconX /> <span className="pt-0.5 leading-snug">Monthly reporting. Minimal iteration</span></li>
            </ul>
          </motion.div>

          {/* AviReels */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/5 flex flex-col h-full transform transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <h3 className="text-3xl md:text-4xl font-bold clash text-[#111111]">AviReels</h3>
            </div>

            <ul className="space-y-6 font-bold text-[#111111] gilroy text-base md:text-lg flex-1">
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Fully managed. Zero lift on your side</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">News-speed production. 1-3 day delivery</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Strategy-first content tied to business outcomes</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug border-b-2 border-indigo-200">Hyper-real AI avatars. Indistinguishable from real</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Built-in distribution and platform optimization</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">30-day pilot before any long-term commitment</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Fraction of the cost of in-house production</span></li>
              <li className="flex items-start gap-4"><IconCheck /><span className="pt-0.5 leading-snug">Iteration built in. Performance improves monthly.</span></li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <CostBreakdown />
        </motion.div>

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
