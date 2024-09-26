import React, { createContext, useContext, ReactNode } from "react"; 
import useLocalStorage from "../hooks/useLocalStorage";

export interface User {
    id: number;
    email: string;
    name: string;
    phone: string;
    createdAt: Date;
    avatarUrl: string;
    updatedAt: Date;
}

interface AuthData {
    user: User;
    token: string;
}

interface AuthContextProps {
    authData: AuthData | null;
    setAuthData: (data: AuthData) => void;
    clearAuthData: () => void;
    getToken: () => string | null; // Método para obter o token
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useLocalStorage<AuthData | null>("authData", null);

    const clearAuthData = () => {
        setAuthData(null);
    };

    const getToken = () => {
        
        return authData?.token || null;  
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, clearAuthData, getToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }


    return context;
};
