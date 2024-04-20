import React from "react";
import Area from "@/public/areas.png";
import Image from "next/image";

export default function Areas() {
  return (
    <>
      <div className="relative h-[80vh] flex justify-center">
        <div className="absolute left-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] space-y-10 w-full flex flex-col items-center justify-around">
          <h2 className="text-4xl font-bold">Areas We Serve</h2>

          <div className="w-full flex items-center justify-around space-x-10">
            <div className="relative h-96 w-96">
              <Image src={Area} fill />
            </div>

            <p className="w-1/3 text-xl">
              <span className="font-bold text-4xl">Our Location</span>
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
