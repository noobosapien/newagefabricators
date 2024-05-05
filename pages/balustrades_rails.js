import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Rail1 from "@/public/10.jpg";

const info = {
  name: "Balustrades and rails fabrication",
  desc1:
    "Each staircase is unique, and we pride ourselves in creating custom stair rails tailored to your specific preferences and requirements. We will develop personalized designs that complement your space and reflect the style of the staircase,",
  desc2:
    "Whether you prefer the timeless elegance of wood, the sleek sophistication of metal, or the transparency of glass, we offer a wide range of options to suit your taste and budget.",
};

export default function BalustradesRails() {
  return (
    <>
      <Layout active="balustrades_rails">
        <ServiceCard
          image={Rail1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />
      </Layout>
    </>
  );
}
