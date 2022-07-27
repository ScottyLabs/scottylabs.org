import type { NextPage } from "next";
import Hero from "../src/components/Hero";
import Layout from "../src/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout collapsedNavBar={false}>
      <Hero />
    </Layout>
  );
};

export default Home;
