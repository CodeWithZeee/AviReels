
export default function SocialProofRibbon() {
  const items = [
    "60M+ YouTube Views",
    "7.73M Subscriber Brand Built",
    "$3,700 Generated On Day 1",
    "200M+ TikTok Hooks",
    "Zero Filming Required",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#111111] shadow-xl border-y border-black/10 z-30 transform -rotate-2 scale-[1.05] sm:-rotate-1 sm:scale-[1.02] my-16 py-4 md:py-5">
      <div className="flex w-max animate-ribbon-scroll">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 md:px-8 text-sm md:text-lg font-bold uppercase tracking-[0.15em] clash text-white whitespace-nowrap"
          >
            <span className="opacity-90 drop-shadow-sm">{item}</span>
            <span className="mx-4 md:mx-8 text-[#f5a623] text-xs md:text-sm">✦</span>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ribbonScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-ribbon-scroll {
          animation: ribbonScroll 35s linear infinite;
        }
      `}} />
    </section>
  );
}