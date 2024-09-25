import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { NavbarProvider } from "./contexts/NavbarContext";
import VerifyCredentialToken from "./hooks/verifyCredential";
import Agendamentos from "./pages/agendamento/Agendamentos";
import AgendarCortePage from "./pages/agendar/AgendarCortePage";
import Landpage from "./pages/landpage/LandPage";
import Local from "./pages/Local/Local";
import LoginPage from "./pages/login/Login";
import SignInPage from "./pages/login/SignIn";
import Profile from "./pages/profile/Profile";
import GlobalStyle from "./Reset";
import Avaliacoes from "./pages/avaliacoes/Avaliacoes";

const App: React.FC = () => {
  return (
    <Router>
        <GlobalStyle />
        <AuthProvider>
          <NavbarProvider>
            <Routes>
              <Route path="/" element={<Landpage />} />
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
                <Route path="/agendar" element={<AgendarCortePage />} />
                <Route path="avaliar" element={<Avaliacoes/>} />
              </Route>
            </Routes>
          </NavbarProvider>
        </AuthProvider>
      </Router>
  );
};

export default App;
function injectStyle() {
  throw new Error("Function not implemented.");
}