import React from "react";
import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>Solomon Owusu-Ansah</title>
      <meta name="description" content="my portfolio" />
      <link rel="icon" href="/memories-Logo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default Header;
