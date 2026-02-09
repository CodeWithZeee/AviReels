import { Aperture } from "lucide-react";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#FBFAF7] rounded-[3rem] px-8 sm:px-12 md:px-20 py-20 text-center shadow-sm">

          {/* Floating Icon */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 rounded-2xl rotate-12">
            {/* <Aperture className="w-6 h-6" /> */}
            <Image 
                src="/Logo.png"
                alt="Aperture Icon"
                width={124}
                height={124}
              />
          </div>

          {/* Pill */}
          <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-10">
            Our mission
          </div>

          {/* Heading */}
          <h2 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]
                         leading-[1.15] font-semibold text-black mb-10">
            Transforming Every <br />
            Piece of Content into{" "}
            <span className="font-serif italic font-normal">
              Lasting Growth
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              We help brands and content creators turn their ideas into powerful,
              scroll-stopping videos that attract, engage, and convert.
            </p>

            <p>
              Every piece of content we craft is built with strategy,
              storytelling, and consistency designed to grow your audience and
              your brand.
            </p>

            <p>
              From creation to posting, we handle everything so you can focus on
              what you do best.
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
        </div>
      </div>
    </section>
  );
}
