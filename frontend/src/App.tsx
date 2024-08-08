// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Local from "./pages/Local/Local";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/login/Login";
import SignInPage from "./pages/login/SignIn";
import GlobalStyle from "./Reset";
import Layout from "./components/layout/Layout";
import { NavbarProvider } from "./contexts/NavbarContext"; // Importe o NavbarProvider

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavbarProvider> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/local" element={<Local />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </NavbarProvider>
    </Router>
  );
};

export default App;