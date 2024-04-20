import React from "react";
import InfoImage from "./InfoImage";

export default function Info() {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center">
        <div className="absolute right-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex items-center justify-around">
          <InfoImage />
          <p className="w-1/3 text-xl">
            <span className="font-bold text-4xl">New Age Fabricators</span>{" "}
            <br />
            <br />
            With a commitment to precision and a passion for quality
            craftsmanship, New Age Fabricators have become synonymus with
            reliable and cutting-edge fabricating solutions. From it's
            inception, the company has dedicated itself to providing top-notch
            services that cater to the diversse needs of clients across various
            industries.
          </p>
        </div>
      </div>
    </>
  );
}
