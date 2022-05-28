import React from "react";
import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>Solomon Owusu-Ansah</title>
      <meta name="description" content="my portfolio" />
      <link rel="icon" href="/memories-Logo.png" />
    </Head>
  );
};

export default Header;
