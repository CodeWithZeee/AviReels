"use client";

import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "Are the AI avatars detectable?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "The short answer: not in normal viewing conditions. Our avatars are produced using the most advanced AI generation available. In real-world use, on real platforms, at normal playback, they are indistinguishable from a real person on camera. We can show you a comparison before you commit.",
  },
  {
    id: 2,
    title: "Do we need to disclose that our content uses AI?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "It depends on your jurisdiction and the platforms you publish on. Requirements vary, and they're evolving. We stay up to date on AI disclosure guidance and help you navigate compliance for your specific situation. Some clients disclose proactively as a transparency strategy — we can advise on that approach too.",
  },
  {
    id: 3,
    title: "Who owns the content?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "You do. Upon full payment, all delivered video content is yours under a perpetual license for the commercial purposes defined in your agreement.",
  },
  {
    id: 4,
    title: "What does \"fully managed\" actually mean?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "It means you hand us a brief — or we build one from your goals — and we handle everything from there. Strategy, scripting, AI avatar production, editing, optimization, formatting, and delivery. Your team's only job is to review and approve.",
  },
  {
    id: 5,
    title: "What platforms do you optimize for?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Instagram Reels, YouTube Shorts, TikTok, LinkedIn, and Threads. Every video is formatted natively for the platforms in your plan — aspect ratio, caption style, hook structure, and length are all tuned per platform.",
  },
  {
    id: 6,
    title: "How fast is turnaround?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Standard delivery is 1-3 business days per video from approved script. For urgent newsjacking or time-sensitive content, we offer priority turnaround on Growth and Enterprise plans.",
  },
  {
    id: 7,
    title: "Can you use our executive's actual likeness?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Yes — on Enterprise plans, we create a custom AI avatar based on your executive or brand spokesperson's likeness. This requires proper consent documentation, which we handle as part of onboarding.",
  },
  {
    id: 8,
    title: "What industries do you specialize in?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "We've produced high-performing content across B2B SaaS, financial content, e-commerce, automotive, digital media, and creator brands. The system adapts to the niche — the production quality and speed stay constant.",
  },
  {
    id: 9,
    title: "What if we need edits?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Revisions are included. If a delivered video doesn't match the approved brief, we fix it. We actively encourage feedback — every note makes the system sharper.",
  },
  {
    id: 10,
    title: "How do we get started?",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Book a strategy call. We'll learn your goals, your brand, and your competitive landscape. From there we scope your engagement. If it's a fit, we start with a 30-day pilot — no long-term commitment required until you see the system working.",
  }
];

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <section>
        <div className="container centerit flex-col">
          <h1 className="gilroy text-5xl font-bold text-center">
            Frequently Asked {" "}
            <span className="font-serif italic font-normal">Questions</span>
          </h1>
          <div className="accordion">
            {accordionData.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  className="accordion-link"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={activeId === item.id}
                >
                  <div className="flex p-10">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="icon-wrapper">
                    <svg
                      className={`icon arrow-forward ${activeId === item.id ? "hidden" : ""}`}
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <svg
                      className={`icon arrow-down ${activeId === item.id ? "" : "hidden"}`}
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`answer ${activeId === item.id ? "active" : ""}`}
                >
                  <p>{item.content}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        section {
          width: 100%;
          min-height: 100vh;
          background-color: #efebe5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "DM Sans", sans-serif;
          padding: 2rem 0;
        }

        .container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .accordion-item {
          background-color: #000;
          border-radius: 0.4rem;
        }

        .accordion-item hr {
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 1rem;
          margin: 0;
        }

        .accordion-link {
          font-size: 1.6rem;
          color: #000000;
          background-color: #efebe5;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2.5rem;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .accordion-link:hover {
          opacity: 0.9;
        }

        .accordion-link h3 {
          font-weight: 500;
          font-size: 20px;
          color: #000000;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
        }

        .icon {
          color: #000000;
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }

        .icon.hidden {
          display: none;
        }

        .accordion-link ul {
          display: flex;
          align-items: flex-end;
          list-style-type: none;
          margin-left: 25px;
        }

        .accordion-link li {
          font-size: 10px;
          color: #000000;
          padding: 0 0 1px 5px;
          display: none;
        }

        .flex {
          display: flex;
          align-items: center;
        }

        .answer {
          max-height: 0;
          overflow: hidden;
          background-color: #dbdbdb;
          transition: max-height 650ms ease;
        }

        .answer.active {
          max-height: 20rem;
        }

        .answer p {
          color: #000;
          font-size: 15px;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .accordion-link h3 {
            font-size: 16px;
          }

          .accordion-link ul {
            margin-left: 10px;
            flex-wrap: wrap;
          }

          .accordion-link li {
            font-size: 8px;
          }

          .flex {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
