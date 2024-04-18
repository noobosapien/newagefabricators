import React from "react";
import BurningWelder from "./BurningWelder";
import Welder from "./Welder";
import NewAgeFabricators from "./NewAgeFabricators";

export default function Hero() {
  return (
    <>
      {/* <BurningWelder /> */}
      <div className="relative">
        <Welder />

        <NewAgeFabricators />
      </div>
    </>
  );
}
