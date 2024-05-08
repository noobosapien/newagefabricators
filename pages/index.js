import Areas from "@/components/Home/Areas";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Testimonials from "@/components/Home/Testimonials";
import Values from "@/components/Home/Values";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout
        title={"New Age Fabrication, Wellington based metal fabricators."}
        description={
          "Wellington based New Age Fabrication specializes in fabrication of truck decks, and toolboxes to beams, and portals for houses."
        }
      >
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
