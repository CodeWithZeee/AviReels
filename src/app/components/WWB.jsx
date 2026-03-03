import { Aperture } from "lucide-react";
import Image from "next/image";
import SystemPillars from "./ui/SystemPillars";

export default function Mission() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#FBFAF7] rounded-[3rem] px-8 sm:px-12 md:px-20 py-20 text-center shadow-sm">
          {/* Floating Icon */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-10 md:right-10 rounded-2xl rotate-12">
            {/* <Aperture className="w-6 h-6" /> */}
            <Image
              src="/Logo.png"
              alt="Aperture Icon"
              width={124}
              height={124}
              className="w-24 h-24 sm:w-20 sm:h-20 md:w-31 md:h-31"
            />
          </div>

          {/* Pill */}
          <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-10">
            What We're Building
          </div>

          {/* Heading */}
          <h2
            className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]
                         leading-[1.15] font-semibold text-black mb-10"
          >
            Content That Compounds.
            <br />
            {/* Piece of Content into{" "} */}
            <span className="font-serif italic font-normal">
              Presence That Pays.
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Most brands treat content as a task. We treat it as
              infrastructure. Every video we produce is a compounding asset: it
              builds authority today, generates inbound tomorrow, and reduces
              sales friction for the next six months.
            </p>

            <p>
              The brands that win in the next decade won't be the ones with the
              best product. They'll be the ones that show up every day in the
              places their audience already lives. We make sure that's you.
            </p>

            <p>
              From strategy to distribution. Fully managed. Nothing left on your
              plate.
            </p>
          </div>

          {/* Brand Footer */}
          <div className="pt-12 flex justify-center items-center gap-2">
            <div className=" p-1 rounded-lg">
              <Image
                src="/Logo.png"
                alt="AviReels Logo"
                width={154}
                height={154}
              />
            </div>
            {/* <span className="font-bold text-lg">AviReels</span> */}
          </div>

          <SystemPillars />
        </div>
      </div>
    </section>
  );
}
