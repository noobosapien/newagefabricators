import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";
import Truck1 from "@/public/6.jpg";

const info = {
  name: "Truck decks and toolboxes fabrication",
  desc1:
    "We specialize in creating durable, functional, and stylish truck decks that are tailored to your specific needs and preferences.",
  desc2:
    "Whether you're a contractor in need of a rugged work deck with storage compartments and toolboxes or an outdoor enthusiast looking for a sleek and versatile deck for recreational use, we got you covered.",
};

export default function TruckDecks() {
  return (
    <>
      <Layout active="truck">
        <ServiceCard
          image={Truck1}
          name={info.name}
          desc1={info.desc1}
          desc2={info.desc2}
        />
      </Layout>
    </>
  );
}
