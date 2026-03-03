import { Check, X, Aperture } from "lucide-react";
import Image from "next/image";
import CostBreakdown from "./ui/CostBreakdown";

export default function Comparison() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-8">
            The difference
          </div>

          <h2
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem]
                         leading-[1.1] font-semibold text-black"
          >
            The alternative costs more <br />
            and delivers less.{" "}
            {/* <span className="font-serif italic font-normal">AviReels</span> */}
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Other Agencies */}
          <div className="bg-[#EBE9E4]/60 rounded-[2.5rem] p-10 md:p-12 opacity-70">
            <h3 className="text-2xl font-bold text-[#A8A6A1] mb-10 text-center">
              Other Agencies
            </h3>

            <ul className="space-y-6 text-[#9CA3AF] font-medium text-lg">
              <li className="flex items-center gap-4">
                <IconX /> You film. They edit
              </li>
              <li className="flex items-center gap-4">
                <IconX /> Slow production cycle
              </li>
              <li className="flex items-center gap-4">
                <IconX /> You manage posting and scheduling
              </li>
              <li className="flex items-center gap-4">
                <IconX /> Content without distribution strategy
              </li>
              <li className="flex items-center gap-4">
                <IconX /> Volume without a clear business outcome
              </li>
              <li className="flex items-center gap-4">
                <IconX /> Long-term contracts before you see results
              </li>
              <li className="flex items-center gap-4">
                <IconX /> No AI. Higher cost per video
              </li>
              <li className="flex items-center gap-4">
                <IconX /> Monthly reporting. Minimal iteration
              </li>
            </ul>
          </div>

          {/* AviReels */}
          <div className="bg-[#FBFAF7] rounded-[2.5rem] p-10 md:p-12 shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className=" p-1 rounded-md">
                {/* <Aperture className="w-4 h-4" /> */}
                {/* <Image
                  src="/Logo.png"
                  alt="Aperture Icon"
                  width={60}
                  height={58}
                /> */}
              </div>
              <h3 className="text-2xl font-bold">AviReels</h3>
            </div>

            <ul className="space-y-6 font-semibold text-black text-lg">
              <li className="flex items-center gap-4">
                <IconCheck />Fully managed. Zero lift on your side
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> News-speed production. 1-3 day delivery
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> Strategy-first content tied to business outcomes
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> Hyper-real AI avatars. Indistinguishable from real
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> Built-in distribution and platform optimization
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> 30-day pilot before any long-term commitment
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> Fraction of the cost of in-house production
              </li>
              <li className="flex items-center gap-4">
                <IconCheck /> Iteration built in. Performance improves monthly.
              </li>
            </ul>
          </div>
        </div>

        <CostBreakdown />

      </div>
    </section>
  );
}

/* Icon helpers */
function IconX() {
  return (
    <div className="bg-[#9CA3AF] rounded-full p-1">
      <X className="w-3 h-3 text-white" />
    </div>
  );
}

function IconCheck() {
  return (
    <div className="bg-black rounded-full p-1">
      <Check className="w-3 h-3 text-white" />
    </div>
  );
}
