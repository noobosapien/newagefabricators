import React from "react";
import ProfileCard from "./ProfileCard";

export default function Team() {
  return (
    <>
      <div className="relative flex justify-center mt-32 md:mt-64">
        <div className="absolute right-[0px] w-10 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col space-y-32 md:space-y-32 items-center justify-around">
          <h2 className="text-4xl font-bold">Our Team</h2>

          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around md:space-x-10 space-y-10 md:space-y-0 p-4">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}
