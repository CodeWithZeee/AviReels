import React from "react";
import BasicChips from "./ui/Chip";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 lg:py-12">
      <div className="h-full p-4 sm:p-6 w-full max-w-4xl bg-white rounded-2xl mt-4">
        <BasicChips />
        <br />
        <h1 className="text-xl sm:text-2xl lg:text-3xl leading-tight">
          <span className="font-bold">Transforming</span> Every Piece of{" "}
          <span className="font-bold">Content</span> into Lasting{" "}
          <span className="font-bold">Growth</span>
        </h1>
        <br />
        <h2 className="text-sm sm:text-base lg:text-lg">
          We help brands and content creators turn their ideas into powerful,
          scroll-stopping videos that attract, engage, and convert.
        </h2>
        <br />
        <h2 className="text-sm sm:text-base lg:text-lg">
          Every piece of content we craft is built with strategy, storytelling,
          and consistency — designed to grow your audience and your brand.
        </h2>
        <br />
        <h2 className="text-sm sm:text-base lg:text-lg">
          From creation to posting, we handle everything so you can focus on
          what you do best.
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
