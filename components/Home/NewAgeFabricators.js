import React from "react";

export default function NewAgeFabricators() {
  return (
    <>
      <div className="absolute left-[32vw] top-12 w-20 h-20 lg:w-48 lg:h-52 bg-mainBlue z-10"></div>
      {/* <div className="absolute left-[10vw] top-64 w-20 h-20 lg:w-48 lg:h-52 bg-secondaryBlue z-10"></div> */}

      <div className="absolute left-[3vw] top-12 w-32 h-20 lg:w-96 lg:h-40 bg-secondaryBlue flex items-center pl-6">
        <span className="text-white font-bold lg:text-3xl">New Age</span>
      </div>
      <div className="absolute left-[10vw] top-32 lg:top-64 w-32 h-20 lg:w-96 lg:h-40 bg-mainBlue flex items-center justify-end pr-6">
        <span className="text-white font-bold lg:text-3xl">Fabricators</span>
      </div>
    </>
  );
}
