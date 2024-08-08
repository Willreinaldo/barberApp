// src/contexts/NavbarContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface NavbarContextProps {
  avatarUrl: string;
  setAvatarUrl: (url: string) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>('./avatar.png'); 
  return (
    <NavbarContext.Provider value={{ avatarUrl, setAvatarUrl }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};