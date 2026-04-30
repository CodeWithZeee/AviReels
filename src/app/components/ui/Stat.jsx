export default function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
      <div className="text-2xl sm:text-3xl font-bold clash text-[#111111] leading-none">
        {value}
      </div>
      <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.16em] text-gray-500 font-bold leading-snug">
        {label}
      </div>
    </div>
  );
}
