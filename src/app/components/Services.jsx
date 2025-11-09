"use client";
import React from "react";
import BasicChips from "./ui/Chip";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 lg:py-12">
      <BasicChips label="Services" />
      <br />
      <h1 className="max-w-68 text-3xl sm:text-4xl lg:text-5xl text-center px-4">
        How <span className="font-bold">we</span> can{" "}
        <span className="font-bold">help</span> you{" "}
        <span className="font-bold">grow</span>{" "}
      </h1>
      <h2 className="text-gray-600 mt-4 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
        We help businesses and creators grow by creating content that commands
        attention
      </h2>
      {/* Card */}
      <h2 className="text-gray-600 mt-4 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
        Every video we deliver is optimized for reach, engagement, and
        conversion.
      </h2>
    </div>
  );
};

export default Services;
