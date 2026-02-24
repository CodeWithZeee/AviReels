"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./ProfileCard.css";

export default function ProfileCard({
  title = "Paul Atreides",
  subtitle = "Duke of Arrakis",
  paragraph = "A charismatic leader navigating politics, prophecy and power in a dangerous desert world.",
  image = "https://assets.codepen.io/1506195/paul-atreides.jpg",
  dark = false,
}) {
  const [following, setFollowing] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      buttonRef.current?.focus();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`card ${dark ? "dark" : ""}`}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={600}
        className="card-image"
      />

      <section>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{paragraph}</p>

        <div>
          <span className="tag">@atreides</span>

          <button
            ref={buttonRef}
            onClick={() => setFollowing(!following)}
            className={following ? "following" : ""}
          >
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>
      </section>
    </div>
  );
}