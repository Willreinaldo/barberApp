// src/components/layout/Layout.tsx
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom"; // Para renderizar o conteúdo filho das rotas

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renderiza o conteúdo da rota atual */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;