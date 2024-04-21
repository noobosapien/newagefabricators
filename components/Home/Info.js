import React from "react";
import InfoImage from "./InfoImage";

export default function Info() {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center">
        <div className="absolute right-[0px] w-20 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full mt-48 md:mt-0 max-w-[1200px] flex flex-col space-y-10 md:flex-row items-center justify-around">
          <InfoImage />
          <div className="flex flex-col md:w-1/3 w-full space-y-10">
            <h1 className="font-bold text-4xl">New Age Fabricators</h1>
            <p className="text-xl text-center md:text-left p-4 md:p-0">
              With a commitment to precision and a passion for quality
              craftsmanship, New Age Fabricators have become synonymus with
              reliable and cutting-edge fabricating solutions. From it's
              inception, the company has dedicated itself to providing top-notch
              services that cater to the diversse needs of clients across
              various industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
