"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  isDecimal = false,
}: {
  value: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  isDecimal?: boolean | number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(
    typeof value === "string" ? value : "0",
  );

  // If value is a string, just display it directly
  if (typeof value === "string") {
    return (
      <span ref={ref}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (typeof isDecimal === "number") {
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
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
  context,
  isDecimal = false,
  className = "",
}: {
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  isDecimal?: boolean | number;
  className?: string;
}) {
  const duration = typeof value === "number" && value > 50000000 ? 3 : 2.5;

  return (
    <div
      className={`bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-start h-full group relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 w-full text-left">
        <div className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold clash tracking-tight text-[#111111] leading-none mb-6">
          <AnimatedCounter
            value={value}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            isDecimal={isDecimal}
          />
        </div>

        <p className="text-[#111111] text-base md:text-lg font-bold uppercase tracking-widest clash mb-4">
          {label}
        </p>

        <p className="text-gray-500 text-sm italic gilroy font-medium">
          {context}
        </p>
      </div>
    </div>
  );
}

export default function StatWall() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-[#F4F2EC]">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-16 md:mb-24">
          <h2 className="text-[3rem] md:text-[4.5rem] font-bold clash text-[#111111] leading-[1.05] mb-6">
            Real output. <br className="hidden sm:block" />
            Documented results.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto gilroy font-medium">
            No projections. No estimates. Every number below is verified.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="md:col-span-2">
            <StatCard
              value={60}
              suffix="M+"
              label="YouTube views delivered"
              context="Forged Fury — monetized in 75 days. Industry standard is 6 to 12 months."
              className="bg-[#111111] !border-none !text-black   [&_*]:!text-black [&_p:last-child]:!text-gray-400 group-hover:[&_.absolute]:from-white/10"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatCard
              value={7.73}
              isDecimal={2}
              suffix="M"
              label="Organic Instagram views"
              context="AI for Everybody — zero ad spend. Built from scratch."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatCard
              value={3700}
              prefix="$"
              label="Sales from a single VSL"
              context="AstrixDigitalMedia — measured from the first day live."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatCard
              value="Zero"
              label="Detections across millions of views"
              context="Client avatar content ran at scale. No audience spotted the AI."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatCard
              value={100}
              suffix="%"
              label="Repeat engagement rate"
              context="Every client who completes a full engagement returns."
            />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-20 text-center">
          <button className="bg-transparent text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-out border-2 border-black/10 hover:border-[#171717] hover:bg-[#171717]/5 active:scale-95">
            See Full Results
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
