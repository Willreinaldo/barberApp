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
    authData: AuthData ;
    setAuthData: (data: AuthData) => void;
    clearAuthData: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useLocalStorage("authData", null);

    const clearAuthData = () => {
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    const { authData } = context;

    if (!authData) {
        throw new Error("No user is authenticated");
    }

    return context;
};
