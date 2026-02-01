"use client";

import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "BRANDING",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this",
  },
  {
    id: 2,
    title: "UX/UI DESIGN",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    id: 3,
    title: "FRONTEND DEVELOPMENT",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    id: 4,
    title: "BACKEND DEVELOPMENT",
    tags: ["#Figma", "#Sketch", "#Adobe", "#Invision", "#Protopie"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
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
                  <div className="flex">
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <svg
                      className={`icon arrow-down ${activeId === item.id ? "" : "hidden"}`}
                      width="24"
                      height="24"
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
          padding: 1rem 0;
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
