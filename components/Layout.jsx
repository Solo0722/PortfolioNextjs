import React from "react";
import Navbar from "./Navbar";
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
