import Image from "next/image";
import { Cpu } from "lucide-react";

export default function ClientResult() {
  return (
    <section className="bg-[#F4F2EC] py-36 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Pill */}
          <div className="inline-flex items-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-10">
            Client results
          </div>

          {/* Heading */}
          <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] font-semibold text-black mb-10">
            Everybody.AI — <br />
            Tripled Engagement <br />
            with{" "}
            <span className="font-serif italic font-normal">
              AviReels
            </span>
          </h2>

          {/* Quote */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8 italic">
            “Our AI reels performed better than any of our traditional ads —
            faster, smarter, and more affordable. AviReels is like having a
            creative studio on autopilot.”
          </p>

          <p className="text-black font-bold mb-16">
            — Astrix Marketing Team
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square">

            <Image
              src="/Everybody.Ai.png"
              alt="AI Robot"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <div className="text-white text-center">
                <Cpu className="w-14 h-14 mx-auto mb-4" />
                <span className="text-4xl font-bold tracking-wide">
                  Astrix
                </span>
              </div>
            </div> */}

          </div>
        </div>

        {/* Stats */}
          <div className="flex gap-16 flex-wrap">
            <Stat
              value="267K"
              label="Reel Views"
              sub="In the first 30 days"
            />
            <Stat
              value="259%"
              label="Engagement"
              sub="Compared to previous month"
            />
          </div>

      </div>
    </section>
  );
}

/* Stat component */
function Stat({ value, label, sub }) {
  return (
    <div>
      <div className="text-5xl font-bold text-black mb-2">
        {value}
      </div>
      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-xs text-gray-400 mt-1 font-medium">
        {sub}
      </div>
    </div>
  );
}
