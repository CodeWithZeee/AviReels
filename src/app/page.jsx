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
      <Hero />
      <StatWall />
      <SocialProofRibbon />
      <HWW />
      <WhatWeBuild />
      <ClientResult />
      <Testimonial />
      <WWB />
      <Comparison />
      <Accordion />
      <ClosingSection />
    </div>
  );
};

export default page;
