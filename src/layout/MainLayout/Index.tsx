import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
