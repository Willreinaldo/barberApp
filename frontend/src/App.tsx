import React from 'react';
//import { AuthProvider } from './contexts/AuthContext';
//import { SchedulingProvider } from './contexts/SchedulingContext';
import Home from './pages/home/Home';
import Local from './pages/Local/Local';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/local" element={<Local />} />
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </Router>
  );
};

export default App;