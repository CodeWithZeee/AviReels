"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";

export default function PricingPage() {
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

    const renderCell = (val) => {
        if (val === "check") return <Check className="w-5 h-5 mx-auto text-[#111111]" />;
        if (val === "double-check") return (
            <div className="flex justify-center -space-x-1.5 align-middle">
                <Check className="w-5 h-5 text-[#111111]" />
                <Check className="w-5 h-5 text-[#111111] opacity-50" />
            </div>
        );
        if (!val) return <span className="text-gray-300">—</span>;
        return <span className="font-semibold text-gray-900">{val}</span>;
    };

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#171717] selection:text-[#F4F2EC]">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 space-y-32 md:space-y-40 flex flex-col items-center w-full overflow-hidden">

                {/* 1. Hero Section */}
                <motion.section
                    className="w-full text-center max-w-4xl mx-auto relative pt-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <div className="absolute inset-0 -top-40 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_70%)] -z-10" />
                    <motion.div variants={fadeUp} className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold clash text-[#111111] leading-[1.1] tracking-tight">
                            Pricing that makes the alternative look <span className="text-gray-400 decoration-black/20 decoration-[3px]">expensive.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium gilroy max-w-3xl mx-auto">
                            AviReels delivers a fully managed AI-powered video authority system — strategy, scripting, production, and distribution — without the overhead of building a team.
                        </p>
                    </motion.div>
                </motion.section>

                {/* 2. Cost Comparison Section */}
                <motion.section
                    className="w-full max-w-5xl mx-auto space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="text-center space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">The Old Way</p>
                        <h2 className="text-3xl md:text-4xl font-bold clash text-[#111111]">Consider what you'd spend building this in-house:</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { role: "Video Editor", cost: "$4k–$8k", period: "/month" },
                            { role: "Social Manager", cost: "$4k–$7k", period: "/month" },
                            { role: "Studio Production", cost: "$2k–$5k", period: "per shoot" },
                            { role: "Strategist", cost: "$5k–$10k", period: "/month" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-black/5 text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 h-8 flex items-center justify-center">{stat.role}</p>
                                <div className="mt-auto">
                                    <p className="text-2xl md:text-3xl font-bold clash text-[#111111]">{stat.cost}</p>
                                    <p className="text-xs text-gray-400 font-medium gilroy mt-1">{stat.period}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto pt-8">
                        <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-[#171717] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold clash mb-6 leading-tight">AviReels delivers all of it. <br className="hidden md:block" /> Fully managed, at a fraction of the cost.</h3>
                            <p className="text-gray-400 md:text-lg gilroy font-medium">No hiring. No overhead. No coordination. One system that runs at full speed from day one.</p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 3. Pricing Plans Section */}
                <motion.section
                    className="w-full space-y-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-[#111111]">Plans & Pricing</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 w-full items-start">
                        {/* Starter */}
                        <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col h-full relative transition-all duration-300 hover:shadow-xl group">
                            <div className="mb-6 border-b border-black/5 pb-6">
                                <h3 className="text-2xl font-bold clash text-[#111111] mb-2">Starter</h3>
                                <p className="text-sm text-gray-500 gilroy font-medium h-16 mr-2">For founders and early-stage startups building their first content presence.</p>
                                <div className="mt-6">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Starting at</p>
                                    <p className="text-4xl font-bold clash text-[#111111]">[Price] <span className="text-base text-gray-400 font-medium">/ mo</span></p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 gilroy mb-8 min-h-[60px] leading-relaxed">You know you need to show up consistently. You don't have a team or a process yet. Starter gives you a working content engine without the complexity.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {[
                                    "Up to 8 short-form videos per month",
                                    "AI avatar production, fully branded",
                                    "Monthly content strategy session",
                                    "Platform-native formatting (Reels, TikTok)",
                                    "Script and creative direction",
                                    "30-day pilot to start"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] font-medium text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 rounded-full border-2 border-black/10 text-black font-bold hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all duration-300">Book Strategy Call</button>
                        </motion.div>

                        {/* Growth */}
                        <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-[#171717] rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col h-full relative transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:-mt-4 lg:-mt-8 group transform scale-100 lg:scale-[1.02] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                            <div className="mb-6 border-b border-white/10 pb-6 mt-2">
                                <h3 className="text-2xl font-bold clash text-white mb-2">Growth</h3>
                                <p className="text-sm text-gray-400 gilroy font-medium h-16 mr-2">For scaling brands that need daily presence and strategic momentum.</p>
                                <div className="mt-6">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Starting at</p>
                                    <p className="text-4xl font-bold clash text-white">[Price] <span className="text-base text-gray-500 font-medium">/ mo</span></p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 gilroy mb-8 min-h-[60px] leading-relaxed">You're past the early stage. You need volume, speed, and content that reacts to your industry in real time.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {[
                                    "Up to 20 short-form videos per month",
                                    "Long-form content strategy (repurposed)",
                                    "Newsjacking and trend commentary",
                                    "Dedicated content strategist",
                                    "Bi-weekly strategy check-ins",
                                    "Priority production turnaround",
                                    "Performance reporting dashboard"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] font-medium text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 rounded-full bg-white text-[#111111] font-bold hover:bg-gray-100 transition-all duration-300">Book Strategy Call</button>
                        </motion.div>

                        {/* Enterprise */}
                        <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col h-full relative transition-all duration-300 hover:shadow-xl group">
                            <div className="mb-6 border-b border-black/5 pb-6">
                                <h3 className="text-2xl font-bold clash text-[#111111] mb-2">Enterprise</h3>
                                <p className="text-sm text-gray-500 gilroy font-medium h-16 mr-2">For organizations that need full-scale operations and infrastructure.</p>
                                <div className="mt-6">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Custom</p>
                                    <p className="text-4xl font-bold clash text-[#111111]">Scoped <span className="text-base text-gray-400 font-medium">to needs</span></p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 gilroy mb-8 min-h-[60px] leading-relaxed">You need more than a vendor. You need a content partner embedded in your brand.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {[
                                    "Unlimited short-form video volume",
                                    "Full long-form ecosystem management",
                                    "Custom AI avatar creation",
                                    "Multi-brand and platform management",
                                    "Dedicated strategist + account lead",
                                    "Real-time collaboration (Slack/Teams)",
                                    "Custom performance reporting"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] font-medium text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 rounded-full border-2 border-black/10 text-black font-bold hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all duration-300">Contact Us</button>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 4. Strategy Sprint Section */}
                <motion.section
                    className="w-full max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-[1.5px] rounded-[3rem] shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-white flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <div className="inline-block px-4 py-1.5 bg-black/5 rounded-full text-[11px] font-bold uppercase tracking-widest text-black/60">Add-on or Standalone</div>
                                <h3 className="text-3xl md:text-4xl font-bold clash text-[#111111]">Strategy Sprint</h3>
                                <p className="text-gray-600 gilroy font-medium text-[1.05rem] md:text-lg leading-relaxed">
                                    For teams that want clarity before they commit. A focused, one-time engagement to build your content strategy, define your formats, map your content pillars, and set your brand up for daily presence.
                                </p>
                            </div>
                            <div className="w-full md:w-auto flex flex-col items-center md:items-end space-y-6 md:border-l md:border-black/5 md:pl-10">
                                <div className="text-center md:text-right">
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">One-time fee</p>
                                    <p className="text-4xl font-bold clash text-[#111111]">[Price]</p>
                                </div>
                                <button className="w-full md:w-auto px-8 py-4 bg-[#171717] text-white rounded-full font-bold hover:bg-black transition-colors md:min-w-[180px]">Book Sprint</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 5. Plan Comparison Table */}
                <motion.section
                    className="w-full max-w-5xl mx-auto space-y-12 hidden md:block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold clash text-[#111111]">Compare Features</h2>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/80 border-b border-black/5">
                                        <th className="p-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 w-[40%]">Features</th>
                                        <th className="p-8 text-xl font-bold clash text-[#111111] text-center w-[20%]">Starter</th>
                                        <th className="p-8 text-xl font-bold clash text-[#111111] text-center w-[20%] bg-[#171717]/[0.02]">Growth</th>
                                        <th className="p-8 text-xl font-bold clash text-[#111111] text-center w-[20%]">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5 text-[15px] gilroy text-gray-700">
                                    {[
                                        { feature: "Short-form video volume", starter: "Up to 8/mo", growth: "Up to 20/mo", enterprise: "Unlimited" },
                                        { feature: "Long-form strategy", starter: "--", growth: "check", enterprise: "double-check" },
                                        { feature: "Dedicated strategist", starter: "--", growth: "check", enterprise: "double-check" },
                                        { feature: "Custom AI avatar", starter: "--", growth: "--", enterprise: "check" },
                                        { feature: "Newsjacking formats", starter: "--", growth: "check", enterprise: "check" },
                                        { feature: "Performance reporting", starter: "--", growth: "check", enterprise: "double-check" },
                                        { feature: "Priority turnaround", starter: "--", growth: "check", enterprise: "check" },
                                        { feature: "Multi-brand management", starter: "--", growth: "--", enterprise: "check" },
                                        { feature: "Onboarding", starter: "30-day pilot", growth: "30-day pilot", enterprise: "Custom" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 pl-8 font-medium text-gray-900 border-r border-transparent">{row.feature}</td>
                                            <td className="p-6 text-center border-l border-black/5">
                                                <div className="flex justify-center items-center h-full">{renderCell(row.starter)}</div>
                                            </td>
                                            <td className="p-6 text-center bg-[#171717]/[0.02] border-x border-black/5">
                                                <div className="flex justify-center items-center h-full">{renderCell(row.growth)}</div>
                                            </td>
                                            <td className="p-6 text-center border-r border-transparent">
                                                <div className="flex justify-center items-center h-full">{renderCell(row.enterprise)}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 6. Closing CTA Section */}
                <motion.section
                    className="w-full text-center space-y-12 max-w-5xl mx-auto pt-8 md:pt-16 pb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="bg-[#171717] rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden text-center z-10 group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

                        <div className="space-y-6 max-w-2xl mx-auto relative z-20">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clash text-white tracking-wide leading-[1.1]">Every retainer begins with a 30-day pilot.</h2>
                            <p className="text-lg md:text-xl text-gray-300 gilroy font-medium">See what we can build before you commit long-term.</p>
                            <div className="pt-6">
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] leading-relaxed max-w-lg mx-auto">We onboard a limited number of new clients per month to ensure every engagement gets our full attention.</p>
                            </div>
                        </div>
                        <motion.div variants={fadeUp} className="pt-12 relative z-20">
                            <button className="bg-white text-[#111111] hover:bg-gray-100 transition-all duration-300 px-10 py-5 rounded-full font-bold text-lg md:text-xl flex items-center justify-center gap-4 mx-auto group shadow-xl hover:scale-105 active:scale-95">
                                Book a Strategy Call
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.section>

            </div>
        </div>
    );
}
