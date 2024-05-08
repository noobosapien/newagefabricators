import React from "react";
import Area from "@/public/areas.png";
import Image from "next/image";

export default function Areas() {
  return (
    <>
      <div className="relative flex justify-center mt-64">
        <div className="absolute right-[0px] w-10 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col space-y-32 md:space-y-48 items-center justify-around">
          <h2 className="text-4xl font-bold">Areas We Serve</h2>

          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around md:space-x-10 space-y-10 md:space-y-0 ">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              <Image src={Area} fill alt="areas covered by us" />
            </div>

            <p className="md:w-1/3 md:text-left text-center text-xl">
              <span className="font-semibold text-center text-2xl">
                Our Location
              </span>
              <br />
              <br />
              We are based in the heart of Wellington and serve the wider region
              of Wellington, contact us for further information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
