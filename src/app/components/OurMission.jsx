import React from "react";
import BasicChips from "./ui/Chip";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-full p-6 w-126 bg-white rounded-2xl mt-4">
        <BasicChips />
        <br />
        <h1 className="text-xl leading-none">
          <span className="font-bold">Transforming</span> Every Piece of{" "}
          <span className="font-bold">Content</span> into Lasting{" "}
          <span className="font-bold">Growth</span>
        </h1>
        <br />
        <h2>
          We help brands and content creators turn their ideas into powerful,
          scroll-stopping videos that attract, engage, and convert.
        </h2>
        <br />
        <h2>
          Every piece of content we craft is built with strategy, storytelling,
          and consistency — designed to grow your audience and your brand.
        </h2>
        <br />
        <h2>
          From creation to posting, we handle everything so you can focus on
          what you do best.
        </h2>
        <div className="flex">
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
