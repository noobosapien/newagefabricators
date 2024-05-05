import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Pregola1 from "@/public/18.jpg";

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
      <Layout active="gates_pregolas">
        <ServiceCard
          image={Pregola1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />
      </Layout>
    </>
  );
}
