"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ResultsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const overviewStats = [
    {
      value: "60M+",
      label: "YouTube views",
      context: "Monetized in 75 days. Industry average is 6 to 12 months.",
    },
    {
      value: "7.73M",
      label: "Organic Instagram views",
      context: "Zero ad spend. Zero paid promotion.",
    },
    {
      value: "$3,700",
      label: "From a single AI avatar VSL",
      context: "Direct sales. Measured from day one.",
    },
    {
      value: "0",
      label: "Detections across millions of views",
      context: "No audience has spotted the AI.",
    },
    {
      value: "100%",
      label: "Repeat engagement rate",
      context: "Every client who has finished a full engagement has come back.",
    },
  ];

  const cases = [
    {
      label: "YouTube · Entertainment",
      title: "Monetized in 75 Days. 60 Million Views.",
      body: "AviReels built the content engine behind Forged Fury from scratch. The industry standard for YouTube monetization is 6 to 12 months. It happened in under 75 days. Then the channel kept growing.",
      stats: [
        { value: "60M+", text: "views across the channel" },
        { value: "75 days", text: "to full monetization" },
        { value: "$1,000+", text: "per month in recurring ad revenue within the first quarter" },
        { value: "70M views", text: "on a single video, outperforming 99.9% of all YouTube Shorts ever published" },
      ],
    },
    {
      label: "Meta Ads · High-Ticket Agency",
      title: "6 AI Videos. Multiple 7-Figure Clients Booked.",
      body: "CyberSphere is an agency that operates at the top end of the market, working with million-dollar clients. AviReels produced over 6 Meta AI video ads for their campaigns. Those creatives directly resulted in multiple 7-figure client engagements booked.",
      stats: [
        { value: "6+", text: "AI video ads produced for Meta" },
        { value: "Multiple 7-figure clients", text: "booked directly from the creatives" },
        { value: "High-ticket proof", text: "that AI avatar ads perform at the highest levels of the market" },
      ],
    },
    {
      label: "Meta Ads · Lead Generation",
      title: "2 Videos. Hundreds of Calls. 2 Months.",
      body: "AviReels produced 2 AI avatar video ads for Astrix Digital Media's Meta campaigns. Within 2 months of going live, those two creatives alone drove a high volume of inbound calls booked directly through Meta.",
      stats: [
        { value: "2", text: "AI video ads produced" },
        { value: "High volume", text: "of inbound calls booked within 2 months on Meta" },
        { value: "Proof", text: "that a small volume of the right creatives outperforms a large volume of the wrong ones" },
      ],
    },
    {
      label: "Instagram · AI Education",
      title: "7.73 Million Organic Views. Zero Spend.",
      body: "AviReels built the content system behind every video from zero. No paid promotion. No shoutouts. Just consistent output that kept performing in a competitive, fast-moving niche.",
      stats: [
        { value: "7.73M", text: "views across 6 Reels" },
        { value: "10,500+", text: "organic followers from scratch" },
        { value: "2.6M", text: "views on the top single Reel" },
        { value: "4.5M", text: "combined impressions from the top two videos alone" },
      ],
    },
    {
      label: "VSL · Conversion Funnel",
      title: "$3,700 in Sales. One Video. Day One.",
      body: "The goal was not views. It was revenue. AviReels produced the AI avatar VSL that went directly into the sales funnel and generated measurable results from the moment it went live.",
      stats: [
        { value: "$3,700", text: "in direct sales from a single AI avatar VSL" },
        { value: "Higher", text: "dwell time on the landing page" },
        { value: "Stronger", text: "trust signals at first impression" },
        { value: "Measurable", text: "increase in booked calls" },
      ],
    },
    {
      label: "AI Video Production · Automotive",
      title: "High Standards. Repeat Every Time.",
      body: "AviReels handled production for PTIQCS across multiple engagements. A US automotive company does not come back if the quality slips. Technical, demanding, and high stakes. PTIQCS came back every time because the output held up.",
      stats: [
        { value: "100%", text: "project retention across all engagements" },
        { value: "Ongoing", text: "repeat collaboration" },
        { value: "Proof", text: "that the production quality holds well beyond digital native brands" },
      ],
    },
  ];

  return (
    <div className="bg-[#F4F2EC] min-h-screen pt-32 pb-20 overflow-hidden text-[#111111]">

      {/* 1. HERO */}
      <motion.section
        className="max-w-5xl mx-auto text-center px-6 mb-32 pt-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-7xl lg:text-[6rem] font-bold clash leading-[1.05] tracking-tight mb-8"
        >
          Real Clients.<br />
          Real Numbers.<br />
          <span className="text-gray-500 font-medium italic font-serif">No Projections.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-2xl mx-auto mb-12"
        >
          Every result on this page is documented. Every client is real. This is what happens when the right system runs behind a brand.
        </motion.p>
        <motion.div variants={fadeUp}>
          <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-out hover:bg-black hover:scale-105">
            Book a Strategy Call
          </button>
        </motion.div>
      </motion.section>

      {/* 2. STAT OVERVIEW */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-24">
          {overviewStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[5rem] md:text-[7rem] lg:text-[8rem] clash font-bold leading-none tracking-tighter mb-4 text-[#111111]">
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl font-semibold gilroy text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm md:text-base italic text-gray-500 font-serif">
                {stat.context}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3-8. CASE STUDIES */}
      <div className="max-w-6xl mx-auto px-6 mb-32 space-y-40">
        {cases.map((c, idx) => (
          <motion.section
            key={idx}
            className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Side: Sticky Title */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="uppercase text-[11px] font-bold tracking-[0.2em] text-gray-500 mb-6">
                  {c.label}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold clash text-[#111111] pr-4">
                  {c.title}
                </h2>
              </div>
            </div>

            {/* Right Side: Body & Stats */}
            <div className="lg:col-span-7 pt-2 lg:pt-10">
              <p className="text-[17px] md:text-[19px] text-gray-600 font-medium gilroy leading-relaxed mb-12">
                {c.body}
              </p>

              <div className="flex flex-col gap-8">
                {c.stats.map((s, i) => (
                  <div key={i} className="border-t border-black/10 pt-4">
                    <span className="text-3xl md:text-4xl clash font-bold text-[#111111] block mb-2">
                      {s.value}
                    </span>
                    <span className="text-base text-gray-600 gilroy font-medium">
                      {s.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* 9. TRANSITION STATEMENT */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 py-20 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl md:text-3xl gilroy font-medium text-gray-500">
          These are the results made public.<br />Yours could be next.
        </p>
      </motion.section>

      {/* 10. CLIENT REACTIONS */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111] max-w-2xl mx-auto leading-[1.1]">
            What clients say when they see their avatar for the first time.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {[
            "/Ser_Reaction.png",
            "/Image_1_Brandon.png",
            "/Image_2_Jake.png",
            "/Image_4_Elevate.png",
            "/Image_5_Natalie.png",
          ].map((img, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="relative w-full rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Client Reaction ${idx}`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-xl"
                quality={90}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 11. FINAL CTA */}
      <motion.section
        className="max-w-4xl mx-auto text-center px-6 py-20 border-t border-black/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-bold clash mb-8 text-[#111111] leading-[1.05]"
        >
          Results like these are available.<br />
          <span className="italic font-serif font-medium text-gray-500">Four spots a month.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Every brand on this page started with one conversation. Every number above came from the same system that is available right now.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Every day without a production system behind you is a day your competitors are posting, growing, and pulling further ahead. That gap does not pause while you decide. <br /><br />
          Four spots a month. Yours to take.
        </motion.p>

        <motion.div variants={fadeUp}>
          <button className="bg-[#171717] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 mx-auto">
            Book a Strategy Call
          </button>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-6">
            30-day pilot · No long-term commitment
          </p>
        </motion.div>
      </motion.section>

    </div>
  );
}
