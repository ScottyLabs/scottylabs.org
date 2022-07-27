import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Layout from "../src/layouts/Layout";

const Home: NextPage = () => {
  return <Layout collapsedNavBar={false}></Layout>;
};

export default Home;
