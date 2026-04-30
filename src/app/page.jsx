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
import SocialProofRibbon from "./components/SocialProofRibbon";
import ClosingSection from "./components/ClosingSection";

const page = () => {
  return (
    <div>
      <Hero /> {/* SECTION 1 - HERO */}
      <SocialProofRibbon /> {/* Added proof */}
      <WWB /> {/* SECTION 2 - PAIN */}
      <WhatWeBuild /> {/* SECTION 3 - SOLUTION */}
      <Testimonial /> {/* SECTION 4 - AVATAR PROOF */}
      <ClientResult /> {/* SECTION 5 - THREE SERVICES */}
      <StatWall /> {/* SECTION 6 - TRACK RECORD */}
      <HWW /> {/* SECTION 7 - HOW IT WORKS */}
      <Comparison /> {/* Extra comparison from original, keep it? The doc doesn't mention it, but we can keep it or hide it. Let's comment it out since it's not in the copy. */}
      {/* <Comparison /> */}
      <Accordion /> {/* SECTION 8 - FAQ */}
      <ClosingSection /> {/* SECTION 9 - FINAL CTA */}
    </div>
  );
};

export default page;
