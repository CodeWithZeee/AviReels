"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedCounter({ value, duration = 2, prefix = "", suffix = "", isDecimal = false }: { value: number, duration?: number, prefix?: string, suffix?: string, isDecimal?: boolean | number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (typeof isDecimal === 'number') {
        setDisplayValue(latest.toFixed(isDecimal));
      } else if (isDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest).toLocaleString());
      }
    });
  }, [springValue, isDecimal]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function StatItem({ value, prefix = "", suffix = "", label, isDecimal = false }: { value: number, prefix?: string, suffix?: string, label: string, isDecimal?: boolean | number }) {
  const duration = value > 50000000 ? 3 : 2.5;

  return (
    <div className="text-center space-y-4">
      <div
        className="text-4xl md:text-5xl lg:text-5xl font-bold clash tracking-tight text-[#111111]"
      >
        <AnimatedCounter value={value} duration={duration} prefix={prefix} suffix={suffix} isDecimal={isDecimal} />
      </div>

      <p className="mt-3 text-gray-600 text-[15px] md:text-base leading-relaxed gilroy font-medium max-w-[200px] mx-auto">
        {label}
      </p>
    </div>
  );
}

export default function StatWall() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-24 border-y border-black/5 bg-[#F4F2EC]">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-[3rem] md:text-[4rem] font-bold clash text-[#111111] leading-[1.1]">The results speak for themselves.</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto gilroy font-medium">Before AI avatars, we built content machines. Here's what the system has delivered across every engagement:</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
          <motion.div variants={fadeUp} className="lg:border-r border-black/10">
            <StatItem
              value={60}
              suffix="M+"
              label="YouTube views delivered (Forged Fury - monetized in 75 days. Industry avg: 6-12 mos)"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:border-r border-black/10">
            <StatItem
              value={7.73}
              isDecimal={2}
              suffix="M"
              label="Organic Instagram views (AI for Everybody - zero ad spend)"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:border-r border-black/10">
            <StatItem
              value={3700}
              prefix="$"
              label="In sales from a single AI avatar VSL (AstrixDigitalMedia)"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:border-r border-black/10">
            <StatItem
              value={0}
              label="AI spotted across client avatar content at scale (Brandon's avatar ran undetected)"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatItem
              value={100}
              suffix="%"
              label="Repeat client rate on completed engagements"
            />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-16 text-center">
          <button className="bg-transparent text-gray-900 px-8 py-4 rounded-full font-bold text-lg md:text-xl border-2 border-black/10 transition-all duration-300 ease-out hover:border-[#171717] hover:bg-[#171717]/5 active:scale-95 mx-auto">
            See Full Results
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}