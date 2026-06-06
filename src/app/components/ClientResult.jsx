"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone, Sparkles, Layers, ArrowRight } from "lucide-react";

export default function ClientResult() {
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

  const cards = [
    {
      title: "For Brands Running Ads",
      description: "More creatives. Faster launches. Less production delay.",
      filter: "ads",
      icon: Megaphone,
      color: "from-amber-500/10 to-orange-500/10 text-orange-600 border-orange-500/20",
    },
    {
      title: "For Personal Brands",
      description: "Consistent content without constant filming.",
      filter: "personal",
      icon: Sparkles,
      color: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-500/20",
    },
    {
      title: "For Agencies & Client Work",
      description: "Content production that scales across multiple brands.",
      filter: "agency",
      icon: Layers,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20",
    },
  ];

  return (
    <section className="bg-[#F4F2EC] py-32 px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold clash text-[#111111] mb-6">
            Built for three <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-gray-800">kinds of growth.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 gilroy font-medium leading-relaxed">
            Whether you're scaling paid ads, building a personal brand, or producing content for clients, AviReels is built to keep production moving.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.03),0_0_20px_rgba(0,0,0,0.01)] border border-black/5 flex flex-col justify-between h-full transform transition-all duration-300 relative group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} border flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold clash text-[#111111] mb-4">
                    {card.title}
                  </h3>

                  {/* Subtext */}
                  <p className="text-base md:text-lg text-gray-600 gilroy font-medium leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* CTA Link Button */}
                <Link
                  href={`/results?filter=${card.filter}`}
                  className="inline-flex items-center justify-between w-full bg-[#F9F9F8] group-hover:bg-[#171717] group-hover:text-white border border-black/5 hover:border-black/10 px-6 py-4 rounded-full font-bold text-gray-900 transition-all duration-300 ease-out mt-auto"
                >
                  <span>View Results</span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center text-gray-900 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
