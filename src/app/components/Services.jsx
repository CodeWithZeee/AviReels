import React from "react";
import BasicChips from "./ui/Chip";

const Services = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <BasicChips label="Services" />
      <br />
      <h1 className="max-w-68 text-base/9">
        How <span className="font-bold">we</span> can{" "}
        <span className="font-bold">help</span> you{" "}
        <span className="font-bold">grow</span>{" "}
      </h1>
      <h2 className="text-gray-600 mt-4 text-xl">
        We help businesses and creators grow by creating content that commands
        attention
      </h2>
      {/* Card */}
      <h2 className="text-gray-600 mt-4 text-xl">
        Every video we deliver is optimized for reach, engagement, and
        conversion.
      </h2>
    </div>
  );
};

export default Services;
