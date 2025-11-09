import React from "react";
import Mobile from "./Mobile";
import Leftside from "./ui/Leftside";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center py-8 lg:py-12 px-4 lg:px-0 gap-8 lg:gap-0">
      <Leftside />
      <div className="flex">
        <Mobile  />
      </div>
    </div>
  );
};

export default Hero;
