import React from "react";
import InfoImage from "./InfoImage";

export default function Info() {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center">
        <div className="absolute right-[0px] w-20 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full mt-48 md:mt-0 max-w-[1200px] flex flex-col space-y-10 md:flex-row items-center justify-around">
          <InfoImage />
          <div className="flex flex-col md:w-1/3 w-full space-y-10">
            <h1 className="font-bold text-4xl">New Age Fabricators</h1>
            <p className="text-xl text-center md:text-left p-4 md:p-0">
              With many successful projects under our belt, we usually deliver
              the highest quality results possible for our customers in the most
              timely manner possible, ranging from truck decks to custom gates
              and many more services.
            </p>
            <p className="italic text-center lg:text-left">
              We also make sure your trucks and gates look much better than your
              neighbor's
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
