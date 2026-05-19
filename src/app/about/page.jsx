"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Layers, Cpu, Code2, Activity, Play, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={containerRef} className="bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      {/* 1. Authority Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100/50 via-white to-white pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gray-900" />
                The AviReels Story
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-gray-900">
                Built Because the <br className="hidden md:block" />
                <span className="text-gray-400">Alternative</span> <br className="hidden md:block" />
                Was Broken.
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                Fake-looking avatars. Slow production. Expensive crews. Real people who were unavailable, inconsistent, or just not good enough. AviReels exists because every other option had already failed the brands that needed video the most.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/booking" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:-translate-y-0.5"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                <CheckCircle2 className="w-4 h-4 text-gray-400" />
                Trusted by 50+ Brands
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Cinematic Visual */}
          <FadeUp delay={0.5} className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Main Window */}
            <motion.div 
              style={{ y: y2 }}
              className="relative w-full max-w-md aspect-[4/5] bg-gray-50 rounded-2xl border border-gray-200 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col z-10"
            >
              <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-2 bg-white/50">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 to-transparent opacity-50" />
                {/* Abstract Avatar Rep */}
                <div className="w-32 h-32 rounded-full border-2 border-gray-200 bg-white shadow-xl flex items-center justify-center relative z-10">
                  <div className="w-24 h-24 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <div className="mt-8 space-y-3 w-full max-w-xs relative z-10">
                  <div className="h-2 bg-gray-200 rounded-full w-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                  <div className="h-2 bg-gray-200 rounded-full w-5/6" />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -right-4 md:-right-8 top-1/4 bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Engine</div>
                <div className="text-sm font-medium text-gray-900">Neural Render</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -left-4 md:-left-8 bottom-1/4 bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</div>
                <div className="text-sm font-medium text-gray-900">Ready in 24h</div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Visual Pause Section: Why This Exists */}
      <section className="py-32 md:py-48 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-10 leading-[1.1]">
              The problem was everywhere. <br className="hidden md:block" />
              <span className="text-gray-400">Nobody was solving it properly.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed text-left md:text-center max-w-3xl mx-auto">
            <p>
              Every brand needed video. Most could not produce it fast enough, affordably enough, or at the quality level that actually moves an audience. The ones trying AI were getting results that looked artificial and performed poorly. The ones hiring production crews were waiting weeks and spending budgets that made no sense for what they received.
            </p>
            <p>
              The technology existed to do this properly. What was missing was someone who understood both sides: how the algorithm actually works and how to build a system that produces content engineered to perform inside it.
            </p>
            <p className="font-semibold text-gray-900 text-xl md:text-2xl pt-4">
              That is what AviReels was built to be.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 3. Founder - Editorial Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <FadeUp>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl relative group">
                <Image
                  src="/FounderPicture.jpg"
                  alt="Siddiq Tarin"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </FadeUp>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <FadeUp>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">Siddiq Tarin</h3>
              <p className="text-lg text-gray-500 mb-10 font-medium tracking-wide">Founder, AviReels &middot; Detroit, Michigan, USA</p>
            </FadeUp>
            <FadeUp delay={0.2} className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Siddiq's background is in Computer Science, but it was the intersection of technology, marketing, and content creation that led to AviReels.
              </p>
              <p>
                With deep expertise in social media marketing and production, he spent years understanding exactly how platform algorithms work. Not in theory. In practice. What makes content perform. What kills reach. What separates a video that gets ignored from one that compounds over time.
              </p>
              <p>
                What he kept seeing was the same problem everywhere. Brands and creators who had something real to say, stuck behind production that was too slow, too expensive, or too dependent on people who delivered inconsistent results. And the AI solutions that existed looked exactly like what they were. Artificial, unconvincing, and off-brand.
              </p>
              <p className="text-gray-900 font-medium border-l-2 border-gray-900 pl-6 my-8 py-2">
                So he built the system he wished existed. One that combines the technical depth of a production company with the algorithm intelligence of a platform-native marketer. The result is content that does not just look real. It performs.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. The Team - Timeline System */}
      <section className="py-32 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-24 mx-auto text-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                The system is only as good as the people running it.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed">
                Behind every creative that goes out under AviReels is a full team of specialists. Every delivery goes through multiple layers before it reaches a client. The team is built to handle scale without sacrificing the detail that makes the difference between content that gets watched and content that gets skipped.
              </p>
            </FadeUp>
          </div>

          <div className="relative max-w-4xl mx-auto mt-20">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform md:-translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-20">
              {[
                { title: "Scripting", desc: "Crafting narratives engineered for retention and algorithmic performance.", icon: Code2 },
                { title: "Avatar Production", desc: "Generating hyper-real models with perfect lip-sync and human micro-expressions.", icon: Cpu },
                { title: "Video Editing", desc: "Pacing, b-roll integration, and sound design to elevate production value.", icon: Layers },
                { title: "Performance Formatting", desc: "Optimizing aspect ratios, safe zones, and captions for each specific platform.", icon: BarChart3 },
                { title: "Quality Control", desc: "Rigorous final review ensuring brand alignment and flawless execution.", icon: Settings }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                  
                  <FadeUp delay={0.2} className={`w-full pl-16 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300 group relative">
                      <div className={`w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <step.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Large Stat Wall */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FadeUp>
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">Production Velocity</p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-8xl md:text-[14rem] font-bold text-gray-900 tracking-tighter leading-none">24</span>
              <span className="text-5xl md:text-8xl font-bold text-gray-300 tracking-tighter">h</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 max-w-2xl mx-auto leading-tight">
              Not because the process is skipped. <br className="hidden md:block" />
              Because the machine is built for scale.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 6. Differentiation - Visual Pause / Typography */}
      <section className="py-40 bg-gray-50 relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-50" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] text-center mb-16">
              Algorithm knowledge <br className="hidden md:block" />
              built into every asset.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-20">
            <FadeUp delay={0.1}>
              <div className="h-full bg-white p-10 rounded-3xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8">
                  <span className="text-xl font-bold text-gray-400">01</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Make things that perform</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Most production companies make things that look good. AviReels makes things that perform. Every creative that leaves the system is built with a specific outcome in mind: stopping the scroll, holding attention through the first three seconds, driving a click, or converting a viewer into a booked call.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="h-full bg-white p-10 rounded-3xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8">
                  <span className="text-xl font-bold text-gray-400">02</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Engineered intentionality</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  That level of intentionality comes from understanding how platforms actually reward content, not just how to make it look polished. That is the difference a CS-trained, marketing-obsessed founder builds into a production company. It shows in the results.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 7. Premium CTA Ending */}
      <section className="py-40 bg-white relative overflow-hidden flex items-center justify-center border-t border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-100/80 via-white to-white pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              The team is ready. <br />
              <span className="text-gray-400">Four spots this month.</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every day without a production system behind you is a day your competitors are posting, growing, and pulling further ahead. That gap does not pause while you decide. Four spots a month. Yours to take.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-col items-center">
            <Link 
              href="/booking" 
              className="px-10 py-5 bg-gray-900 text-white rounded-full font-medium text-lg flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:-translate-y-1 group"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-8 flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest flex-wrap">
              <span>30-day pilot</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
              <span>No long-term commitment</span>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}