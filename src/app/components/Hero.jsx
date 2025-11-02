import React from "react";
import Mobile from "./Mobile";
import Leftside from "./ui/Leftside";

const Hero = () => {
  return (
    <div className="flex justify-around items-center py-12">
      <Leftside />
      <div className="flex ">
        <Mobile  />
      </div>
    </div>
  );
};

export default Hero;
