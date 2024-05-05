import Image from "next/image";
import React from "react";
import Boat from "@/public/4.jpg";

export default function ServiceCard() {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-40">
        <div className="flex flex-col w-full max-w-[1200px] gap-y-16">
          <h2 className="font-semibold text-2xl">
            Boat repairs and Modification
          </h2>
          <div className="flex justify-between w-full">
            <div className="relative h-96 w-96">
              <Image src={Boat} fill alt="boat" />
            </div>

            <div className="w-[40%] flex flex-col gap-y-10">
              <p className="text-lg">
                This process typically begins with a thorough inspection to
                assess the extent of damage or wear. This may involve examining
                the hull for cracks, checking the integrity of the deck, and
                inspecting the propulsion system.
                <br />
                <br />
                Depending on the issues identified, repairs may include
                fiberglass work to patch holes or cracks, replacing damaged or
                worn-out components such as rigging, sails, or engines, and
                refinishing surfaces to restore their appearance and protect
                against corrosion.
              </p>

              <span className="w-full text-center bg-mainBlue text-white font-semibold cursor-pointer py-4 hover:opacity-70">
                View our work
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
