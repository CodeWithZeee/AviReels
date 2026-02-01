import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F4F2EC] pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 md:space-y-10 text-center md:text-left">

            {/* Social Icons */}
            <div className="inline-flex items-center gap-4 bg-[#E5E2DC] px-4 py-3 rounded-full mx-auto md:mx-0">
              <Instagram className="w-5 h-5 text-gray-700 hover:text-black transition" />
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-black transition" />
              <Facebook className="w-5 h-5 text-gray-700 hover:text-black transition" />
            </div>

            {/* Headline */}
            <h2 className="font-semibold text-black leading-[1.05]
              text-[3rem] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[5.5rem]">
              AI Videos <br />
              That <br />
              Tell &{" "}
              <span className="font-serif italic font-normal">
                Sell
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
              We create ultra-realistic AI Videos and Reels — featuring lifelike
              Avatars, Animated Characters, or Both — designed to hook instantly,
              tell your story, and grow your brand effortlessly.
            </p>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative
              w-[320px] h-160
              sm:w-85 sm:h-170
              md:w-90 md:h-180
              rounded-[3rem]
              border-10 border-white
              shadow-2xl overflow-hidden bg-black">

              {/* Status bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[75%] h-1 bg-white/30 rounded-full z-10" />

              {/* Story header */}
              <div className="absolute top-10 left-6 flex items-center gap-2 z-10 text-white">
                <div className="w-9 h-9 rounded-full bg-linear-to-tr from-pink-500 to-yellow-400" />
                <span className="text-sm font-semibold">jessicasu</span>
                <span className="text-sm text-white/70">6h</span>
              </div>

              {/* VIDEO (uncomment when ready) */}
              {/*
              <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
