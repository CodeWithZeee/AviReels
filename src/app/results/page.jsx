"use client";

import React from "react";
import { motion } from "framer-motion";
import ClientCard from "../components/ui/ClientCard";
import Image from "next/image";

export default function ResultsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-[#F4F2EC] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 1. HERO */}
      <motion.section
        className="max-w-4xl mx-auto text-center px-6 mb-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-bold clash text-[#111111] leading-[1.1] mb-6"
        >
          Documented Performance.
          <br />
          <span className="font-serif italic font-normal text-gray-700">
            Not Projections.
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-2xl mx-auto"
        >
          Every number below is real. Every client is real. This is what the
          system builds.
        </motion.p>
      </motion.section>

      {/* 2. FORGED FURY */}
      <ClientCard
        platform="YouTube Shorts · Entertainment Niche"
        titleLine1="Monetized in 75 Days."
        titleLine2="60 Million Views."
        description="Most creators spend 6-12 months trying to reach YouTube monetization. We did it in under 75 days — then built a machine that kept producing algorithm-dominating content. What we delivered: YouTube monetized 70-80% faster than industry average. 60M+ views across the channel. $1,000+ per month in recurring ad revenue within the first quarter."
        stats={[
          { value: "60M+", label: "Views across the channel" },
          { value: "75 Days", label: "To monetization" },
          { value: "70M", label: "Top video views" },
        ]}
      />

      {/* 3. AI FOR EVERYBODY */}
      <ClientCard
        platform="Instagram Reels · AI Education Niche"
        titleLine1="7.73 Million Views."
        titleLine2="Zero Ad Spend."
        description="Built from scratch. No paid promotion. No shoutouts. Just engineered content that kept going viral — video after video. What we delivered: 7.73 million views across 6 Reels. 10,500+ organic followers built from zero."
        stats={[
          { value: "7.73M", label: "Views across 6 Reels" },
          { value: "10,500+", label: "Organic followers built from zero" },
          { value: "2.6M", label: "Top single Reel views" },
        ]}
        reverse
      />

      {/* 4. ASTRIX DIGITAL MEDIA */}
      <ClientCard
        platform="AI Avatar VSLs · Conversion Funnels"
        titleLine1="$3,700 in Sales from a"
        titleLine2="Single AI Avatar VSL."
        description="The goal wasn't views. It was revenue. We built AI avatar video sales letters for their landing pages and sales funnels. The result was direct, measurable, and immediate. What we delivered: $3,700 in direct sales from AI avatar VSL content, higher dwell time, stronger trust, and measurable increase in booked calls."
        stats={[{ value: "$3,700", label: "In direct sales" }]}
      />

      {/* 5. PTIQCS */}
      <ClientCard
        platform="AI Video Production · Automotive Industry"
        titleLine1="Detroit Automotive. Repeat Client."
        titleLine2="100% Retention."
        description="High-stakes. Technical. Demanding. A US automotive company that knows exactly when quality falls short. They came back every time because the quality held. What we delivered: AI-assisted video production for automotive content, 100% project retention."
        stats={[
          { value: "100%", label: "Retention" },
          { value: "Repeat", label: "Collaboration" },
        ]}
        reverse
      />

      {/* 6. CLIENT REACTIONS */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-24 border-t border-black/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold clash text-[#111111]">
            What clients say when they see their avatar for the first time.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              className="relative rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white aspect-auto"
            >
              <Image
                src={img}
                alt={`Client Reaction ${idx}`}
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 7. FINAL CTA */}
      <motion.section
        className="text-center py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold clash mb-10 text-[#111111]"
        >
          Results like these start with one conversation.
        </motion.h2>

        <motion.div variants={fadeUp}>
          <button className="bg-[#171717] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 mx-auto">
            Book a Strategy Call
          </button>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-6">
            30-day pilot · No long-term commitment · Limited spots per month
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
