import Layout from "@/components/Layout";
import ServiceCard from "@/components/Services/ServiceCard";
import React from "react";

export default function Services() {
  return (
    <>
      <Layout active="services">
        <ServiceCard />
        <ServiceCard />
      </Layout>
    </>
  );
}
