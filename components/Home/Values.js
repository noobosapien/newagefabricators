import React from "react";
import CostSave from "@/public/cost_save.svg";
import Expertise from "@/public/expertise.svg";
import Quality from "@/public/quality.svg";
import Image from "next/image";

export default function Values() {
  return (
    <>
      <div className="relative mt-64 md:mt-0 flex justify-center">
        <div className="absolute left-[0px] w-10 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col items-center justify-center md:justify-around space-y-32 md:space-y-48">
          <h2 className="text-4xl text-center font-bold">Our Values</h2>

          <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-center md:justify-around md:space-x-10 px-4">
            <div className="flex flex-col items-center space-y-5">
              <div className="relative w-24 h-24 md:w-40 md:h-40">
                <Image src={Quality} fill alt="Quality service by us" />
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
              <div className="relative w-24 h-24 md:w-40 md:h-40">
                <Image src={Expertise} fill alt="Unparalleled expertise" />
              </div>

              <h3 className="text-2xl font-bold text-center">
                Unparalleled
                <br />
                Expertise
              </h3>

              <p className="text-center text-xl">
                With many decades of experience in fabrication we bring some of
                the most advanced solutions to the table and provide what
                customers actually want.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="relative w-24 h-24 md:w-40 md:h-40">
                <Image src={CostSave} fill alt="Cost effective solutions" />
              </div>

              <h3 className="text-2xl font-bold text-center">
                Cost Effective
                <br />
                Solutions
              </h3>

              <p className="text-center text-xl">
                With streamlined production processes, we will devise a
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
