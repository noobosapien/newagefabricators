import React from "react";
import CostSave from "@/public/cost_save.svg";
import Expertise from "@/public/expertise.svg";
import Quality from "@/public/quality.svg";
import Image from "next/image";

export default function Values() {
  return (
    <>
      <div className="relative h-[80vh] flex justify-center">
        <div className="absolute left-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col items-center justify-around">
          <h2 className="text-4xl font-bold">Our Values</h2>

          <div className="flex items-center justify-around space-x-10">
            <div className="flex flex-col items-center space-y-5">
              <div className="relative w-40 h-40">
                <Image src={Quality} fill />
              </div>

              <h3 className="text-2xl font-bold text-center">
                Quality
                <br />
                Craftsmanship
              </h3>

              <p className="text-center text-xl">
                We strive for perfection in every job we do, it is a core value
                of ours to provide clients with the best possible handiwork for
                their projects.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="relative w-40 h-40">
                <Image src={Expertise} fill />
              </div>

              <h3 className="text-2xl font-bold text-center">
                Unparalleled
                <br />
                Expertise
              </h3>

              <p className="text-center text-xl">
                With many decades of experience in fabrication we bring some of
                the most advanced solutions to the table and provide with what
                customers actually want.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="relative w-40 h-40">
                <Image src={CostSave} fill />
              </div>

              <h3 className="text-2xl font-bold text-center">
                Cost Effective
                <br />
                Solutions
              </h3>

              <p className="text-center text-xl">
                With streamlined production processes, we will device a
                fabrication solution that meets both budgetary constraints and
                quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
