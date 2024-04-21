import React from "react";
import WelderImage from "@/public/welder_info.jpg";
import Image from "next/image";

export default function InfoImage() {
  return (
    <>
      <div className="relative h-64 w-64 md:h-96 md:w-96 info-image">
        <Image src={WelderImage} fill />
      </div>
    </>
  );
}
