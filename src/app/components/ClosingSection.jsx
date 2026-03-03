'use client';

import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCountdown() {
  const [spots, setSpots] = useState(3);
  return spots;
}

export default function ClosingCTA() {
  const [sectionRef, inView] = useInView(0.1);
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionEl = useRef(null);
  const spotsLeft = useCountdown();

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionEl.current) return;
      const rect = sectionEl.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Manrope:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(3%, 2%); }
          30% { transform: translate(-1%, 4%); }
          40% { transform: translate(4%, -1%); }
          50% { transform: translate(-3%, 3%); }
          60% { transform: translate(2%, -4%); }
          70% { transform: translate(-4%, 1%); }
          80% { transform: translate(1%, -2%); }
          90% { transform: translate(3%, 4%); }
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cta-primary-btn {
          position: relative;
          background: #fff;
          color: #0a0a0a;
          border: none;
          border-radius: 100px;
          padding: 18px 40px;
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease;
        }
        .cta-primary-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f5c842, #e8a020);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 100px;
        }
        .cta-primary-btn:hover::before { opacity: 1; }
        .cta-primary-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 20px 60px rgba(232,160,32,0.4);
        }
        .cta-primary-btn span { position: relative; z-index: 1; }

        .cta-secondary-btn {
          background: transparent;
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 18px 40px;
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.35s ease;
        }
        .cta-secondary-btn:hover {
          border-color: rgba(255,255,255,0.6);
          color: #fff;
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        .spots-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 8px 18px;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .ticker-wrap {
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 14px 0;
          width: 100%;
        }
        .ticker-track {
          display: flex;
          gap: 0;
          white-space: nowrap;
          animation: ticker 28s linear infinite;
          width: max-content;
        }
        .ticker-item {
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          padding: 0 40px;
        }
        .ticker-dot {
          color: rgba(255,165,0,0.5);
          padding: 0 4px;
        }
      `}</style>

      <section
        ref={sectionEl}
        style={{
          background: "#080808",
          position: "relative",
          overflow: "hidden",
          paddingBottom: 0,
        }}
      >
        {/* Animated radial glow that follows mouse */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at ${mousePos.x}% ${mousePos.y}%, rgba(200,140,30,0.08) 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "background 0.1s ease",
        }} />

        {/* Static ambient glows */}
        <div style={{
          position: "absolute", top: "10%", left: "20%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,200,50,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "15%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,100,50,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Grain texture */}
        <div style={{
          position: "absolute", inset: "-50%",
          width: "200%", height: "200%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(2) infinite",
          pointerEvents: "none",
          opacity: 0.4,
        }} />

        {/* Main content */}
        <div
          ref={sectionRef}
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "120px 32px 100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Eyebrow label */}
          <div
            className="spots-badge"
            style={{
              marginBottom: 52,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 7, height: 7,
                borderRadius: "50%",
                background: "#f5a623",
                display: "inline-block",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute", inset: -1,
                  borderRadius: "50%",
                  border: "1px solid rgba(245,166,35,0.5)",
                  animation: "pulseRing 1.8s ease-out infinite",
                }} />
              </span>
              Now accepting March pilots
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 86px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#ffffff",
            margin: "0 0 28px",
            letterSpacing: "-1.5px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.75s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}>
            Your category has<br />
            attention to win.{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #f5c842 0%, #e8821e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              We'll engineer
            </em>
            <br />
            <em style={{ fontStyle: "italic" }}>your presence inside it.</em>
          </h2>

          {/* Subline */}
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 560,
            margin: "0 0 60px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.75s cubic-bezier(0.23,1,0.32,1) 0.35s",
          }}>
            We onboard a limited number of new brands each month to ensure every engagement gets our full attention. If you're considering AviReels,{" "}
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>don't wait on it.</span>
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.48s",
          }}>
            <button className="cta-primary-btn">
              <span>Book a Strategy Call →</span>
            </button>
            <button className="cta-secondary-btn">
              See Client Results
            </button>
          </div>

          {/* Scarcity line */}
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.62s",
          }}>
            We onboard no more than{" "}
            <span style={{ color: "rgba(245,166,35,0.7)", fontWeight: 600 }}>5 new brands per month</span>
            {" "}· 30-day pilot · No long-term commitment until you see the system working.
          </p>
        </div>

        {/* Ticker */}
        <div className="ticker-wrap">
          <div className="ticker-track">
            {Array(2).fill([
              "Strategy First", "System Over Sporadic", "Engineered Distribution",
              "134M+ Views Delivered", "Daily Authority", "AI Video Infrastructure",
              "No Filming Required", "30-Day Pilot", "100% Repeat Client Rate",
              "Built to Compound", "Hyper-Real Avatars",
            ]).flat().map((item, i) => (
              <span key={i} className="ticker-item">
                {item} <span className="ticker-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}