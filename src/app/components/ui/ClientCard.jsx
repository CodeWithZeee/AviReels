import Image from "next/image";
import Stat from "./Stat";

export default function ClientCard({
  platform = "",
  titleLine1 = "",
  titleLine2 = "",
  description = "",
  image,
  stats = [],
}) {
  return (
    <section className="py-32 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div>
            <div className="text-sm tracking-widest text-neutral-400 mb-4">
              {platform}
            </div>

            <h2 className="text-5xl leading-tight font-semibold mb-6">
              {titleLine1} <br />
              <span className="italic font-serif">{titleLine2}</span>
            </h2>

            <p className="text-neutral-600 max-w-xl mb-12">{description}</p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <Stat key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative rounded-3xl overflow-hidden border border-dashed border-neutral-300 aspect-4/3">
            {image ? (
              <Image
                src={image}
                alt="Client Screenshot"
                fill
                className="object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
