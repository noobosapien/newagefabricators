import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Rail1 from "@/public/10.jpg";
import Rail2 from "@/public/7.jpg";
import Rail3 from "@/public/8.jpg";
import Rail4 from "@/public/9.jpg";
import Rail5 from "@/public/13.jpg";
import Rail6 from "@/public/14.jpg";
import Work from "@/components/Services/Work";

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
      <Layout
        active="balustrades_rails"
        title={"Balustrades and rails by New Age Fabrication"}
        description={
          "Transform your staircase, balcony, or terrace into a statement piece that seamlessly blends style and safety. With New Age Fabrications, elevate your surroundings to new heights."
        }
      >
        <ServiceCard
          image={Rail1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />

        <Work images={[Rail2, Rail3, Rail4, Rail5, Rail6]} />
      </Layout>
    </>
  );
}
