import Areas from "@/components/Home/Areas";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import Values from "@/components/Home/Values";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Info />
        <Values />
        <WhatWeDo />
        <Testimonials />
        {/* <Team /> */}
        <Areas />
      </Layout>
    </>
  );
}
