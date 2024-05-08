import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Beams1 from "@/public/1.jpg";
import Work from "@/components/Services/Work";

const info = {
  name: "Structural beams and portals",
  desc1:
    "Structural beams and portals are the backbone of any building. With our dedication to precision engineering and quality craftsmanship, we bring strength, stability, and architectural elegance to projects of all sizes ",
  desc2:
    "Whether you prefer the warmth and character of natural wood, the strength and durability of steel, or the versatility and sustainability of composite materials, we offer a wide range of options to suit your aesthetic preferences and structural strength requirements.",
};

export default function BeamsPortals() {
  return (
    <>
      <Layout
        active="beams_portals"
        title={"House beams and portals by New Age Fabrication"}
        description={
          "We specialize in crafting robust house beams and portals that form the backbone of your structure. Our innovative approach combines precision engineering with premium materials to ensure unparalleled strength and durability."
        }
      >
        <ServiceCard
          image={Beams1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />

        <Work images={[Beams1]} />
      </Layout>
    </>
  );
}
