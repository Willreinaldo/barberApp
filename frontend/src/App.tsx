// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Local from "./pages/Local/Local";
import Sobre from "./pages/sobre/Sobre";
import Servicos from "./pages/servicos/Servicos";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/login/Login";
import SignInPage from "./pages/login/SignIn";
import Agendamentos from "./pages/agendamento/Agendamentos";
import GlobalStyle from "./Reset";
import Layout from "./components/layout/Layout";
import AgendarCortePage from "./pages/agendar/AgendarCortePage";
import { NavbarProvider } from "./contexts/NavbarContext";
import { AuthProvider } from "./contexts/AuthContext";
import Landpage from "./pages/landpage/LandPage";
import VerifyCredentialToken from "./hooks/verifyCredential";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <NavbarProvider>
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/servicos" element={<Servicos/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route
              element={
                <VerifyCredentialToken>
                  <Layout />
                </VerifyCredentialToken>
              }
            >
              <Route path="/local" element={<Local />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/agendamentos" element={<Agendamentos />} />   
              <Route path="/agendar" element={<AgendarCortePage/>} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </NavbarProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
