import React from "react";
//import { AuthProvider } from './contexts/AuthContext';
//import { SchedulingProvider } from './contexts/SchedulingContext';
import Home from "./pages/home/Home";
import Local from "./pages/Local/Local";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import GlobalStyle from "./Reset";

const App: React.FC = () => {
  return (
    <Router>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local" element={<Local />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
