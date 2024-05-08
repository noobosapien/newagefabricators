import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Pregola1 from "@/public/18.jpg";
import Pregola2 from "@/public/15.jpg";
import Pregola3 from "@/public/16.jpg";
import Pregola4 from "@/public/17.jpg";
import Work from "@/components/Services/Work";

const info = {
  name: "Gates and pregolas fabrication",
  desc1:
    "A gate is the first impression of your home or business. We design and integrate gates and pregolas according to the property's architecture and landscape and according to your needs.",
  desc2:
    "Gates and Pregolas can be customized with a variety of design elements, including ornamental accents, lattice panels, decorative hardware, and integrated lighting as needed.",
};

export default function GatesPregolas() {
  return (
    <>
      <Layout
        active="gates_pregolas"
        title={"Gates and portals by New Age Fabrication"}
        description={
          "Transform your outdoor space with our stunning designs that seamlessly blend form and function. From elegant entry gates to captivating pregolas, each creation is meticulously crafted to elevate your surroundings and enhance your lifestyle."
        }
      >
        <ServiceCard
          image={Pregola1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />

        <Work images={[Pregola2, Pregola3, Pregola4]} />
      </Layout>
    </>
  );
}
