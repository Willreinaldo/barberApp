import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext'; 

interface VerifyCredentialTokenProps {
  children: React.ReactNode;
}

const VerifyCredentialToken: React.FC<VerifyCredentialTokenProps> = ({ children }) => {
  const { authData } = useAuthContext();
  const token = authData?.token;

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default VerifyCredentialToken;
