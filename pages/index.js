import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Info />
      </Layout>
    </>
  );
}
