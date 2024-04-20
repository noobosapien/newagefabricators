import React from "react";
import ProfileCard from "./ProfileCard";

export default function Team() {
  return (
    <>
      <div className="relative h-[80vh] flex justify-center">
        <div className="absolute right-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] w-full flex flex-col items-center justify-around">
          <h2 className="text-4xl font-bold">Our Team</h2>

          <div className="w-full flex items-center justify-around space-x-10">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}
