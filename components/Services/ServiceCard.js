import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ image, name, desc1, desc2 }) {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-40">
        <div className="flex flex-col items-center lg:items-start w-full max-w-[1200px] gap-y-16">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between w-full">
            <div className="relative border-mainBlue border-8 h-80 w-80 lg:h-96 lg:w-96 drop-shadow-md">
              <Image src={image} fill alt={name} />
            </div>

            <div className="w-[80%] lg:w-[40%] flex flex-col gap-y-10">
              <p className="text-lg">
                {desc1}
                <br />
                <br />
                {desc2}
              </p>

              <div className="flex flex-col space-y-5">
                <span className="w-full text-center">
                  We are based in Wellington
                </span>

                <Link
                  href="/contact"
                  className="w-full drop-shadow-md text-center bg-mainBlue text-white font-semibold cursor-pointer py-4 hover:opacity-70"
                >
                  Contact us now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
