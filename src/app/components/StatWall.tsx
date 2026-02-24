"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let startTime: number;

        const easeOutExpo = (t: number) =>
          t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;

          const progress = timestamp - startTime;
          const raw = Math.min(progress / duration, 1);
          const eased = easeOutExpo(raw);

          setCount(Math.floor(eased * end));

          if (progress < duration) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatItem({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const duration = value > 50000000 ? 2600 : 1800;
  const { count, ref } = useCountUp(value, duration);
  const formatted = new Intl.NumberFormat("en-US").format(count);

  return (
    <div className="text-center">
      <div
        ref={ref}
        style={{ fontVariantNumeric: "tabular-nums" }}
        className="text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tight text-neutral-900"
      >
        {formatted}
        {suffix}
      </div>

      <p className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
        {label}
      </p>
    </div>
  );
}

export default function StatWall() {
  return (
    <section className="py-20  border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <StatItem
          value={142000000}
          suffix="+"
          label="Organic impressions delivered"
        />

        <StatItem
          value={134100000}
          label="YouTube views from 10 videos"
        />

        <StatItem
          value={70000000}
          label="Views on a single video"
        />

        <StatItem
          value={75}
          label="Days to YouTube monetization (avg: 6-12 months)"
        />
      </div>
    </section>
  );
}