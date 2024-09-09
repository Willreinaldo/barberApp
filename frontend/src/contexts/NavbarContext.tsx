import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useAuthContext, User } from './AuthContext';

interface NavbarContextProps {
  avatarUrl: string;
  setAvatarUrl: (url: string) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const { authData, setAuthData } = useAuthContext();
  const user = authData?.user;

  const [avatarUrl, setAvatarUrl] = useState<string>("./avatar.png");  

  useEffect(() => {
 
    const fetchUserAvatar = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/user/${user?.id}`, {  
          method: "GET",
          headers: {
            "Content-Type": "application/json",
             "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
        });
        console.log(response);

        if (response.ok) {
          const userData = await response.json();
           if (userData.avatarUrl) {
            setAvatarUrl(userData.avatarUrl);
          }
        } else {
          console.error("Erro ao buscar o avatar do usuário:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar o avatar do usuário:", error);
      }
    };

    fetchUserAvatar();
  }, []);

  return (
    <NavbarContext.Provider value={{ avatarUrl, setAvatarUrl }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};