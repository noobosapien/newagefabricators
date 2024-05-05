import React, { useState } from "react";
import IndustryCard from "./IndustryCard";
import Marine from "@/public/2.jpg";
import General from "@/public/6.jpg";
import CNC from "@/public/13.jpg";
import Gates from "@/public/18.jpg";
import Structural from "@/public/1.jpg";

export default function WhatWeDo() {
  const [industries] = useState([
    {
      image: Marine,
      name: "Boat repairs and modifications",
      link: "/services",
    },
    {
      image: General,
      name: "Custom truck decks / Tool boxes",
      link: "/services",
    },
    {
      image: CNC,
      name: "Balustrades / Rails",
      link: "/services",
    },

    {
      image: Gates,
      name: "Custom gates and pregolas",
      link: "/services",
    },
    {
      image: Structural,
      name: "Structural house beams / portals",
      link: "/services",
    },
  ]);

  return (
    <>
      <div className="relative flex justify-center mt-64">
        <div className="absolute right-[0px] w-10 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col space-y-32 md:space-y-48 items-center justify-around">
          <h2 className="text-4xl text-center font-bold">What We Do</h2>

          <div className="flex flex-col flex-wrap md:flex-row items-center justify-center md:justify-around md:space-x-10 space-y-10 md:gap-10">
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
