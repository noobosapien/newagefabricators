import Image from "next/image";
import React from "react";
import Welder1 from "@/public/welder 1.jpg";

export default function ProfileCard() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="relative h-72 w-72">
          <Image src={Welder1} fill alt="profile picture" />
        </div>

        <p className="font-semibold text-xl text-center">John Doe</p>

        <p className="text-center">10+ years of experience</p>
      </div>
    </>
  );
}
