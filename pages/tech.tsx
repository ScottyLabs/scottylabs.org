import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Typography from "../src/components/Typography";

const Tech: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar collapsed={true} />
      <div
        style={{
          marginTop: "5%",
          marginLeft: "10%",
        }}
      >
        <div>
          <Typography variant="header">TECH</Typography>
        </div>
        <div style={{ marginTop: "2%" }}>
          <Typography variant="body">
            Tech is a ScottyLabs team branch that works on ___.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tech;
