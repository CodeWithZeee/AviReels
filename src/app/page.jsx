import React from "react";
import Hero from "./components/Hero";
import WhatWeBuild from "./components/WhatWeBuild";
import WWB from "./components/WWB";
import HWW from "./components/HWW";
import Accordion from "./components/FAQ";
import ClientResult from "./components/ClientResult";
import Testimonial from "./components/Testimonial";
import Comparison from "./components/Difference";
import StatWall from "./components/StatWall";
import ClosingSection from "./components/ClosingSection";
import SocialProofRibbon from "./components/SocialProofRibbon"; 

const page = () => {
  return (
    <div>
      <Hero /> {/* SECTION 1 - HERO */}
      <SocialProofRibbon /> {/* SECTION 2 - CREDIBILITY BAR */}
      <WWB /> {/* SECTION 3 - PAIN */}
      <WhatWeBuild /> {/* SECTION 4 - SOLUTION */}
      <Comparison /> {/* SECTION 5 - THE REAL DIFFERENTIATOR */}
      <ClientResult /> {/* SECTION 6 - WHO WE BUILD THIS FOR */}
      <StatWall /> {/* SECTION 7 - TRACK RECORD */}
      <HWW /> {/* SECTION 8 - HOW IT WORKS */}
      <Accordion /> {/* SECTION 9 - FAQ */}
      <ClosingSection /> {/* SECTION 10 - FINAL CTA */}
    </div>
  );
};

export default page;
