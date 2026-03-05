"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

// --- Animated Counter Component ---
function AnimatedCounter({ value, duration = 2, prefix = "", suffix = "", isDecimal = false }) {
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
      if (isDecimal) {
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

// --- Interactive Performance Card Component ---
function PerformanceCard({ card, index }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      layout
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-black/5 relative overflow-hidden transition-shadow duration-300 flex flex-col cursor-pointer group"
    >
      <motion.div layout="position" className="mb-4 pb-4 border-b border-black/5 z-10">
        <h3 className="text-2xl font-bold clash text-[#111111] mb-3 leading-tight tracking-tight group-hover:text-black transition-colors">{card.title}</h3>
        <p className="text-gray-600 font-semibold text-base md:text-lg leading-relaxed">{card.subtitle}</p>
      </motion.div>

      {/* 
        This container holds the bullet points.
        It starts collapsed (height: 0, opacity: 0) and expands on hover (desktop) or tap (mobile).
      */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 16 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="overflow-hidden relative z-0"
      >
        <ul className="space-y-4">
          {card.points.map((point, i) => (
            <li key={i} className="flex flex-col text-gray-700 font-medium text-[0.95rem] md:text-base gilroy relative pl-5">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-black/40" />
              <span dangerouslySetInnerHTML={{ __html: point.replace(/Not a campaign\. A system\.|Most agencies can't promise one viral video\. We built a machine that produces them consistently\.|Views → Authority → Trust → Sales\./g, match => `<strong class="text-black font-bold mt-1 block">${match}</strong>`) }} />
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Visual cue to hover/click for more info */}
      <motion.div
        layout="position"
        initial={false}
        animate={{
          opacity: isExpanded ? 0 : 1,
          height: isExpanded ? 0 : "auto",
          marginTop: isExpanded ? 0 : 16
        }}
        transition={{ duration: 0.3 }}
        className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 overflow-hidden"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>

    </motion.div>
  );
}

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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#171717] selection:text-[#F4F2EC]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 space-y-32 md:space-y-40 flex flex-col items-center w-full">

        {/* 1. Hero Section */}
        <motion.section
          className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="space-y-8 text-center lg:text-left" variants={fadeUp}>
            <div className="inline-block px-4 py-2 bg-black/5 text-sm font-semibold uppercase tracking-widest rounded-full text-black/80">
              Authority Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold clash text-[#111111] leading-[1.1] tracking-tight">
              We build authority infrastructure for brands that refuse to be ignored.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium gilroy max-w-2xl mx-auto lg:mx-0">
              Not a content agency. Not a software tool. A fully managed AI-powered video authority engine built to outpublish your competitors, compound attention daily, and own your category conversation without production burden.
            </p>
            <div className="pt-2">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                Trusted by founders and fast-growing brands.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-[2rem] overflow-hidden flex items-center justify-center border border-black/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-gray-50/50" />
            <div className="z-10 text-center space-y-3 p-8 flex flex-col items-center w-full">
              <div className="flex items-center gap-6 w-full justify-center opacity-80 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center px-2">Human</span>
                </div>
                <div className="w-8 h-px bg-gray-400" />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-widest text-center px-2">AviReels AI</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold clash text-gray-800">Side-by-side comparison</h3>
              <p className="text-gray-500 font-medium text-sm tracking-wide px-4">
                Real human vs AviReels AI avatar. Let the viewer try to spot the difference.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 2. Why We Exist */}
        <motion.section
          className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">Why We Exist</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed gilroy">
              <p>
                Agencies move too slow. In-house teams burn out. Recording takes time nobody has. And meanwhile, your competitors are publishing every day. Building authority, compounding attention, and widening the gap.
              </p>
              <p>
                We built AviReels because the tools to do something dramatically better already exist. What was missing was the strategy, the system, and someone willing to run it at full speed on your behalf.
              </p>
              <p className="font-semibold text-black bg-black/5 p-6 rounded-2xl border border-black/5 border-l-4 border-l-black">
                That&apos;s what we do. Fully managed. Zero production lift on your end. Daily presence that makes your brand feel inevitable.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full h-80 lg:h-full min-h-[400px] rounded-[2rem] bg-gradient-to-br from-[#171717] to-gray-900 flex items-center justify-center p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent mix-blend-overlay"></div>

            <motion.div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/10 flex items-center justify-center relative"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-colors duration-700" />
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <div className="w-12 h-12 bg-white/20 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 3. The System */}
        <motion.section
          className="w-full space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">The System</h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-800 gilroy font-medium">
                AviReels is not a tool you use.<br className="hidden md:block" /> It&apos;s a system that runs for you.
              </p>
              <p className="text-lg md:text-xl text-gray-600 gilroy leading-relaxed block">
                We operate like a newsroom embedded in your brand. Every week, we identify the conversations happening in your industry, build content that positions you at the center of them, and distribute it across every platform that matters. <span className="font-semibold text-black">Before your competitors finish their first draft.</span>
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {[
              { step: "Step 1", title: "Strategy Alignment", desc: "We learn your brand, your voice, your competitive landscape, and your goals. We define your content pillars, your tone, and the narratives that will build authority in your category." },
              { step: "Step 2", title: "Content Engine Build", desc: "We build your AI avatar, establish your production workflow, and set your content calendar. From this point, we move at news speed." },
              { step: "Step 3", title: "Production & Optimization", desc: "We script, produce, and refine every video. AI avatars that are indistinguishable from real. Content engineered for platform-native retention, not just aesthetics." },
              { step: "Step 4", title: "Distribution & Iteration", desc: "We post, monitor, analyze, and adjust. Every piece of content becomes data. Every iteration makes the next one sharper." }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-[#171717] text-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/5 relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{card.step}</div>
                <h3 className="text-2xl md:text-3xl font-bold clash mb-4 text-white group-hover:text-[#F4F2EC] transition-colors">{card.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mix-blend-luminosity">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. Why AI Avatars Win */}
        <motion.section
          className="w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="space-y-10 order-2 lg:order-1" variants={fadeUp}>
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">Why AI Avatars Win</h2>
              <p className="text-lg md:text-xl text-gray-700 gilroy leading-relaxed">
                Every other solution requires a human in front of a camera. That means scheduling conflicts, recording fatigue, bad lighting, and a hard ceiling on how much you can publish.
                <br /><br />
                <span className="font-semibold text-black">AI avatars remove every one of those constraints.</span>
              </p>
            </div>
            <ul className="space-y-5">
              {[
                "No recording sessions. No camera anxiety. No bad days on screen.",
                "Perfect brand consistency across every video, every time.",
                "Scale infinitely. Same avatar, same voice, same energy at volume one or volume one hundred.",
                "Instant edits. No reshoots. Changes in hours, not days.",
                "Your executive's time stays on running the company."
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4 text-base md:text-lg text-gray-800 font-medium gilroy">
                  <div className="bg-black/5 p-1.5 md:p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#171717]" />
                  </div>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-black/10">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                "And the technology has crossed the threshold. The avatars we produce are indistinguishable from real. Your audience won't spot the difference. They'll just see a brand that shows up every single day."
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-white rounded-[2rem] relative overflow-hidden flex items-center justify-center order-1 lg:order-2 shadow-2xl border border-black/5 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-50/50 group-hover:scale-105 transition-transform duration-700" />
            <div className="z-10 text-center space-y-4 p-8 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm mx-8">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-200 to-indigo-100 border-4 border-white shadow-md flex items-center justify-center relative">
                <div className="absolute -top-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold clash text-gray-900">AI Avatar Preview</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm uppercase tracking-widest mt-2">Visual Placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 5. What We're Not */}
        <motion.section
          className="w-full max-w-4xl mx-auto text-center space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">What We&apos;re Not</h2>
            <p className="text-xl md:text-2xl text-gray-700 gilroy font-medium max-w-2xl mx-auto">
              AviReels is not for everyone. We&apos;re built for brands that want to dominate. Not dabble.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-16 shadow-2xl border border-black/5 text-left relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#171717]" />
            <div className="space-y-6 md:space-y-8 pl-4 lg:pl-0 mb-8">
              <p className="text-xl md:text-2xl font-bold text-black border-b border-black/5 pb-6 clash">We&apos;re not the right fit if you:</p>
              <div className="grid gap-4 md:gap-5">
                {[
                  "Treat content as an afterthought and aren't ready to take it seriously",
                  "Want viral hacks over compounding authority",
                  "Are uncomfortable with AI-generated content",
                  "Aren't willing to show up consistently in your category"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="flex items-start gap-5 text-base md:text-xl text-gray-600 font-medium p-3 md:p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#171717] rotate-45 shrink-0 mt-2 md:mt-1.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pl-4 lg:pl-0 pt-8 border-t border-black/5">
              <p className="text-xl md:text-2xl font-bold text-[#111111] clash">If that&apos;s not you, let&apos;s talk.</p>
            </div>
          </motion.div>
        </motion.section>

        {/* 6. The Standard */}
        <motion.section
          className="w-full text-center space-y-10 max-w-4xl mx-auto py-12 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">The Standard</motion.h2>
          <motion.p variants={fadeUp} className="text-2xl md:text-4xl text-[#171717] font-medium leading-relaxed gilroy">
            Every brand we work with should reach a point where their audience thinks:
          </motion.p>
          <motion.div variants={fadeUp} className="py-8 md:py-12 relative">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 text-9xl text-black/5 font-serif leading-none">"</div>
            <blockquote className="text-4xl md:text-5xl lg:text-7xl clash font-semibold text-[#111111] leading-tight relative z-10">
              &apos;They always seem to know what&apos;s going on.&apos;
            </blockquote>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-3 text-lg md:text-xl text-gray-600 font-medium gilroy bg-white/50 inline-block px-8 py-6 rounded-2xl shadow-sm border border-black/5">
            <p>That&apos;s not luck. That&apos;s what consistent, strategic presence builds.</p>
            <p className="text-[#171717] font-bold text-xl md:text-2xl pt-2">We make sure you get there.</p>
          </motion.div>
        </motion.section>

        {/* 7. Proof Section (Documented Performance) */}
        <motion.section
          className="w-full space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-4">PROOF</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">DOCUMENTED PERFORMANCE</h3>

            <div className="pt-6 pb-6">
              <span className="text-2xl md:text-4xl font-bold text-white bg-[#171717] px-8 py-4 rounded-full clash shadow-xl md:scale-105 inline-block">
                142,000,000+ organic impressions.
              </span>
            </div>

            <p className="text-xl md:text-2xl font-bold text-gray-800 gilroy">Not projected. Documented.</p>
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium">
              We don&apos;t ask you to take our word for it. Here&apos;s exactly what the system has produced, calculated, specific, and accountable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 w-full pt-8 items-start">
            {[
              {
                title: "AI for Everybody: Instagram Reels",
                subtitle: "Built from zero. No paid ads. No shoutouts. No gimmicks. Just engineered momentum.",
                points: [
                  "10,500+ followers scaled organically.",
                  "7.73 million views across just 6 viral Reels: top hits: 2.6M, 1.9M, 840K, 821K, 770K.",
                  "1 follower per ~736 views, an exceptionally strong cold-traffic conversion rate.",
                  "The top 2 videos alone brought 4.5 million combined impressions. Not a campaign. A system."
                ]
              },
              {
                title: "ForgedFury: YouTube Shorts",
                subtitle: "Most creators spend a year trying to get monetized. We did it in 75 days.",
                points: [
                  "YouTube monetized in under 2.5 months, 70-80% faster than average.",
                  "$1,000+ per month in recurring ad revenue within the first quarter.",
                  "134.1 million views across just 10 videos, top hit: 70M.",
                  "The 70M video outperformed 99.99% of all YouTube Shorts ever published.",
                  "Most agencies can't promise one viral video. We built a machine that produces them consistently."
                ]
              },
              {
                title: "PTIQCS: Automotive AI Production",
                subtitle: "High-stakes. Technical. Demanding. The kind of client that knows exactly when quality falls short.",
                points: [
                  "100% project retention: ongoing collaboration and repeat work. The most honest signal of quality in B2B.",
                  "Cross-industry AI capability proven: production quality holds across demanding verticals."
                ]
              },
              {
                title: "AstrixDigitalMedia: AI Avatar Funnels",
                subtitle: "AI avatar content for landing pages. The goal wasn't impressions. It was booked calls.",
                points: [
                  "Sales calls booked directly from AI avatar pages: real pipeline, not vanity metrics.",
                  "Increased page engagement and dwell time: visitors trusted faster and converted higher.",
                  "Indistinguishable realism feeling human enough to build trust at first impression."
                ]
              },
              {
                title: "TrueMuslimWarrior: Instagram Threads",
                subtitle: "30 days. That's all it took to build an authority presence that directly drove product revenue.",
                points: [
                  "+1,800 followers in 30 days organically (60/day).",
                  "376,000 monthly views, approximately 12,500 impressions delivered per day.",
                  "eBook sales generated directly from content: no ad spend. Views → Authority → Trust → Sales."
                ]
              },
              {
                title: "TryLattice: Stocks Niche (Ongoing)",
                subtitle: "Stocks. Finance. One of the hardest trust niches on the internet. Authority is earned, not assumed.",
                points: [
                  "Record-breaking views hit immediately: highest-performing content ever in opening weeks.",
                  "Exponential growth curve initiated compounding from day one.",
                  "Avatar realism clearing the fundamental trust threshold for financial audiences."
                ]
              }
            ].map((card, idx) => (
              <PerformanceCard key={idx} card={card} index={idx} />
            ))}
          </div>
        </motion.section>

      </div>

      {/* 8. Stats Wall */}
      <motion.section
        className="w-full bg-[#171717] text-white py-24 md:py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-center text-xl md:text-3xl font-bold clash text-white/90 mb-16 max-w-3xl mx-auto">Different niches. Different platforms. Same underlying system.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 text-center lg:text-left">
            <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold clash tracking-tight text-white flex items-center justify-center lg:justify-start">
                <AnimatedCounter value={142} />M+
              </p>
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em]">Impressions</p>
            </div>
            <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold clash tracking-tight text-white flex items-center justify-center lg:justify-start">
                <AnimatedCounter value={134.1} isDecimal={true} />M
              </p>
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em]">YouTube Views</p>
            </div>
            <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold clash tracking-tight text-white flex items-center justify-center lg:justify-start">
                <AnimatedCounter value={10500} suffix="+" />
              </p>
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em]">Followers</p>
            </div>
            <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold clash tracking-tight text-white flex items-center justify-center lg:justify-start">
                <AnimatedCounter value={1000} prefix="$" suffix="+" />
              </p>
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em]">Mo. Revenue</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Combined Scorecard */}
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.section
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold clash text-[#111111]">The Combined Scorecard</h2>
            <p className="text-lg md:text-xl text-gray-600 gilroy font-medium max-w-2xl mx-auto">Across all active and completed engagements, this is what the system has built:</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border border-black/5">
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
              {[
                "142,000,000+ documented organic impressions across platforms",
                "134,100,000 YouTube views from 10 videos (ForgedFury)",
                "7,730,000 Instagram Reel views across 6 videos (AI for Everybody)",
                "376,000 monthly Threads views in month one (TrueMuslimWarrior)",
                "YouTube monetization achieved 70–80% faster than industry average",
                "Sales calls booked directly from AI avatar landing pages",
                "100% repeat client rate on completed B2B projects",
                "eBook revenue driven from organic content with zero ad spend",
                "Authority built to reduce sales friction: consistent presence that makes inbound deals easier.",
                "Content built to convert, not just go viral: every engagement is tied to a business outcome."
              ].map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg text-gray-700 font-medium gilroy leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>
      </div>

      {/* 9. Final Authority Statement */}
      <div className="max-w-6xl mx-auto px-6 pb-32 md:pb-48 flex flex-col items-center w-full">
        <motion.section
          className="w-full text-center space-y-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold clash leading-[1.1] text-[#111111] tracking-tight">
              If attention can be won in your category, <br className="hidden md:block" /> <span className="text-black inline-block mt-2">we will engineer your presence inside it.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-10">
            <button className="bg-[#171717] text-white hover:bg-black transition-all duration-300 px-10 py-5 rounded-full font-bold text-lg md:text-xl flex items-center justify-center gap-4 mx-auto group shadow-2xl hover:shadow-black/20 hover:scale-105 active:scale-95">
              Start the Conversation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </motion.section>
      </div>

    </div>
  );
}