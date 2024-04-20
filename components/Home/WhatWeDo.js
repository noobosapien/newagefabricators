import React, { useState } from "react";
import IndustryCard from "./IndustryCard";
import Marine from "@/public/marine.jpg";
import General from "@/public/conveyor.jpg";
import CNC from "@/public/cnc.jpg";

export default function WhatWeDo() {
  const [industries] = useState([
    {
      image: Marine,
      name: "Marine Engineering",
      link: "/services",
    },
    {
      image: General,
      name: "General Fabrication",
      link: "/services",
    },
    {
      image: CNC,
      name: "CNC Operation",
      link: "/services",
    },
  ]);

  return (
    <>
      <div className="relative h-[100vh] flex justify-center">
        <div className="absolute right-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col items-center justify-around">
          <h2 className="text-4xl font-bold">What We Do</h2>

          <div className="flex items-center justify-around space-x-10">
            {industries.map((industry, i) => (
              <IndustryCard
                key={`industry_${i}`}
                image={industry.image}
                name={industry.name}
                link={industry.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
