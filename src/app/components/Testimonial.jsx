import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FBFAF7] rounded-[3rem] p-10 md:p-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-10">

              {/* Quote Icon */}
              <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-white fill-white" />
              </div>

              {/* Quote Text */}
              <h3 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem]
                             leading-[1.15] font-semibold text-black">
                Our AI reels performed better than any of our traditional ads —{" "}
                <span className="font-serif italic font-normal">
                  faster, smarter, and more affordable.
                </span>
              </h3>

              {/* Author */}
              <div className="flex flex-wrap items-center gap-2 text-gray-500 font-medium">
                <span className="font-semibold text-gray-600">
                  Marketing Team
                </span>
                <span className="text-gray-300">•</span>
                <span>Astrix Media</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image
                  src="/AstrixLogo.png"
                  alt="Marketing meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
