"use client";

import { motion } from "framer-motion";

const text1 =
  "Building this in-house would cost: Videographer ($4-8K/mo) + Social Manager ($4-7K/mo) + Studio production ($2-5K/shoot) + Strategist ($5-10K/mo).";

const text2 =
  "AviReels delivers all of it. Fully managed, at a fraction of the cost.";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function AnimatedText({ text, className }) {
  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          style={{ display: "inline-block", marginRight: "6px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function CostBreakdown() {
  return (
    <section className="w-full py-24 px-6 bg-[#F4F2EC]">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-10 md:p-14 border-l-4 border-black shadow-sm">

          <AnimatedText
            text={text1}
            className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium gilroy"
          />

          <AnimatedText
            text={text2}
            className="mt-6 text-xl md:text-2xl leading-relaxed font-bold text-[#111111] clash"
          />
        </div>
      </div>
    </section>
  );
}