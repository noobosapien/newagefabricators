import React from "react";

export default function NewAgeFabricators() {
  return (
    <>
      <div className="absolute left-[620px] top-12 w-48 h-52 bg-mainBlue z-10"></div>
      <div className="absolute left-[360px] top-64 w-48 h-52 bg-secondaryBlue z-10"></div>

      <div className="absolute left-[420px] top-24 w-96 h-40 bg-secondaryBlue flex items-center pl-6">
        <span className="text-white font-bold text-3xl">New Age</span>
      </div>
      <div className="absolute left-[420px] top-64 w-96 h-40 bg-mainBlue flex items-center justify-end pr-6">
        <span className="text-white font-bold text-3xl">Fabricators</span>
      </div>
    </>
  );
}
