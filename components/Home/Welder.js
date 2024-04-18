import React from "react";
import WeldImg from "@/public/welder.jpg";
import Image from "next/image";

export default function Welder() {
  const imageStyle = {
    objectFit: "cover",
  };

  return (
    <>
      <div className="relative w-screen h-[40vh] md:h-[80vh]">
        <Image src={WeldImg} style={imageStyle} fill />
      </div>
    </>
  );
}
