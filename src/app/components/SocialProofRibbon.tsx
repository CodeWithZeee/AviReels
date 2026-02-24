"use client";

export default function SocialProofRibbon() {
  const items = [
    "134M+ YouTube Views",
    "10,500+ Organic Followers Built",
    "Monetized in 75 Days",
    "100% Repeat Client Rate",
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="py-5">
        <div className="flex w-max animate-marquee">
          {/* Duplicate for seamless looping */}
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center px-10 text-sm md:text-base font-medium whitespace-nowrap"
            >
              <span className="opacity-90">{item}</span>

              {/* Divider */}
              <span className="ml-10 h-5 w-px bg-white/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}