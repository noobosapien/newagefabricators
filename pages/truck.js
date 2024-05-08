import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Truck1 from "@/public/6.jpg";
import Truck2 from "@/public/5.jpg";
import Work from "@/components/Services/Work";

const info = {
  name: "Truck decks and toolboxes fabrication",
  desc1:
    "We specialize in creating durable, functional, and stylish truck decks that are tailored to your specific needs and preferences.",
  desc2:
    "Whether you're a contractor in need of a rugged work deck with storage compartments and toolboxes or an outdoor enthusiast looking for a sleek and versatile deck for recreational use, we've got you covered.",
};

export default function TruckDecks() {
  return (
    <>
      <Layout
        active="truck"
        title={"Truck decks and truck toolboxes by New Age Fabrication"}
        description={
          "Built to withstand the toughest challenges on the road, our truck decks are engineered with precision and crafted with durability in mind. From hauling heavy loads to conquering rugged terrains, our decks provide unmatched reliability and performance."
        }
      >
        <ServiceCard
          image={Truck1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />
        <Work images={[Truck2]} />
      </Layout>
    </>
  );
}
