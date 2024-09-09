// src/components/layout/Layout.tsx
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";  

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;