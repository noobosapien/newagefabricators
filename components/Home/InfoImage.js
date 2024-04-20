import React from "react";
import WelderImage from "@/public/welder_info.jpg";
import Image from "next/image";

export default function InfoImage() {
  return (
    <>
      <div className="relative h-96 w-96 info-image">
        <Image src={WelderImage} fill />
      </div>
    </>
  );
}
