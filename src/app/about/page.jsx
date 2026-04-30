"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-[#F4F2EC] text-[#111111] overflow-hidden pt-20">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32 space-y-32 md:space-y-40">
        
        {/* 1. Hero Section */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold clash leading-[1.1] mb-8">
            We don't make content.<br />
            <span className="font-serif italic font-normal text-gray-800">We build video presence that compounds.</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-3xl mx-auto space-y-6">
            <p>
              AviReels is a fully managed AI video production service. We build hyper-real AI avatars and run complete video operations for creators, businesses, coaches, and agencies — so they show up everywhere that matters without the cost, time, or friction of traditional video production.
            </p>
            <p>
              We're not an agency with account managers and slow turnarounds. We're a lean, fast production system that moves at the speed your content needs to move.
            </p>
          </motion.div>
        </motion.section>

        {/* 2. Why We Exist */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-black/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold clash mb-8">The problem we're solving is real.</h2>
            <div className="space-y-6 text-gray-600 gilroy text-lg leading-relax">
              <p>Most people who need video presence have the same three problems:</p>
              <p className="font-bold text-gray-800">
                They hate being on camera. They don't have time to film and edit consistently. And traditional video production costs more than it should for what it delivers.
              </p>
              <p>
                Meanwhile the brands winning attention in every category are showing up daily. Building trust. Compounding their presence. And widening the gap every single day.
              </p>
              <p>
                AI avatar technology has crossed the threshold. The avatars we produce are indistinguishable from real in normal viewing conditions. Your audience won't spot the difference. They'll just see a brand that shows up every single day.
              </p>
              <p className="font-bold text-gray-800 pt-4 border-t border-black/10">
                We built AviReels to close that gap — for everyone who knows they need to show up but hasn't been able to.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 3. What Makes Us Different */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold clash">Why AviReels. <span className="font-serif italic font-normal text-gray-600">Not someone else.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Speed",
                desc: "1-3 day turnaround per video. From approved brief to ready-to-post content faster than any traditional production pipeline."
              },
              {
                title: "Realism",
                desc: "Our avatars are produced using the most advanced generation available. Client content runs to hundreds of thousands of views with nobody spotting the AI."
              },
              {
                title: "Full Management",
                desc: "Strategy, scripting, avatar production, editing, formatting. Everything. You review and approve. We handle the rest."
              },
              {
                title: "Results-First",
                desc: "Every video we produce is tied to a real business outcome. Views, followers, booked calls, direct sales. Not vanity metrics."
              },
              {
                title: "Proven Track Record",
                desc: "60M+ YouTube views. 7.73M organic Instagram views. $3,700 in sales from a single VSL. YouTube monetization in 75 days."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-8 bg-white rounded-3xl border border-black/5">
                <h3 className="text-2xl font-bold clash mb-3">{item.title}</h3>
                <p className="text-gray-600 gilroy font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. Final CTA */}
        <motion.section
          className="text-center pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold clash mb-10 max-w-2xl mx-auto">
            Ready to show up everywhere without going on camera?
          </motion.h2>
          
          <motion.div variants={fadeUp}>
            <button className="bg-[#171717] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 flex items-center justify-center gap-3 group mx-auto">
              Book a Strategy Call
            </button>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-6">
              30-day pilot · No long-term commitment · Limited spots per month
            </p>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}