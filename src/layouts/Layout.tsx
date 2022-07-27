import Head from "next/head";
import { ReactElement } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({
  page,
  collapsedNavBar = true,
}: {
  page?: ReactElement;
  collapsedNavBar?: Boolean;
}) => {
  return (
    <div>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar collapsed={collapsedNavBar} />
      {page}
      <Footer />
    </div>
  );
};

export default Layout;
