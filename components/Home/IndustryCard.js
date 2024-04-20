import Image from "next/image";
import React from "react";

export default function IndustryCard({ image, name, link }) {
  return (
    <>
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-72 h-72 border-4 border-mainBlue">
          <Image src={image} fill />
        </div>

        <p className="text-center text-l font-bold">{name}</p>

        <span className="w-full text-center hover:cursor-pointer hover:bg-secondaryBlue bg-mainBlue rounded-xl p-3 text-white font-semibold">
          More Info
        </span>
      </div>
    </>
  );
}
