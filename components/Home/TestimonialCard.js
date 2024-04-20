import React from "react";
import Google from "@/public/google.svg";
import Star from "@/public/star.svg";
import Image from "next/image";

export default function TestimonialCard({ name, stars, review }) {
  return (
    <>
      <div className="flex flex-col p-6 space-y-2 border-2 h-80 w-full">
        <div className="relative h-8 w-8">
          <Image src={Google} fill />
        </div>

        <p className="font-bold underline">{name}</p>

        <div className="flex space-x-2">
          {Array.from(Array(stars), (e, i) => (
            <div className="relative h-4 w-4">
              <Image src={Star} fill />
            </div>
          ))}
        </div>

        <p>{review}</p>
      </div>
    </>
  );
}
