import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function IndustryCard({ image, name, link }) {
  return (
    <>
      <div
        className="flex flex-col items-center space-y-6 border p-6"
        style={{
          filter:
            "drop-shadow(0 4px 3px rgba(0,0,0,0.1)) drop-shadow(0 2px 2px rgba(0,0,0, 0.06))",
        }}
      >
        <div className="relative w-72 h-72 border-4 border-mainBlue">
          <Image src={image} fill alt="our description" />
        </div>

        <p className="text-center text-l font-bold">{name}</p>

        <Link
          href={link}
          className="w-full text-center hover:cursor-pointer hover:bg-secondaryBlue bg-mainBlue rounded-xl p-3 text-white font-semibold"
        >
          View Service
        </Link>
      </div>
    </>
  );
}
