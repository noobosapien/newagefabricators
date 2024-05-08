import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Boat from "@/public/4.jpg";
import Boat2 from "@/public/2.jpg";
import Boat3 from "@/public/3.jpg";
import Work from "@/components/Services/Work";

const info = {
  name: "Boat repairs and modification",
  desc1:
    "With years of experience and a passion for maritime craftsmanship, we specialize in restoring and maintaining boats of all shapes and sizes to pristine condition.",
  desc2:
    "From minor cosmetic repairs to major structural overhauls, we have the expertise and resources to tackle any repair project with precision and care. Whether your boat has suffered damage from collisions, corrosion, or wear and tear, you can trust us to restore it to its former glory.",
};

export default function BoatRepairs() {
  return (
    <>
      <Layout
        active="boat_repairs"
        title={"Boat repairs by New Age Fabrication"}
        description={
          "Set sail with confidence with New Age Fabrications, your premier destination for boat repairs. We specialize in restoring vessels to their full glory, combining years of experience with a passion for maritime excellence."
        }
      >
        <ServiceCard
          image={Boat}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />

        <Work images={[Boat2, Boat3]} />
      </Layout>
    </>
  );
}
