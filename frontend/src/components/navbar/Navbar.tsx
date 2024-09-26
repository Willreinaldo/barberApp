// src/components/navbar/Navbar.tsx
import React, {useEffect} from "react";
import { useNavbarContext } from "../../contexts/NavbarContext";
import {
  NavbarContainer,
  LogoContainer,
  LogoText,
  LogoImage,
  NavLinks,
  NavLink,
  AvatarImage,
} from "./Navbar.styles";
import Accessibilik from 'accessibility-react-widget';

const Navbar: React.FC = () => {
  const { avatarUrl } = useNavbarContext();

  
  return (
    <NavbarContainer>
      <LogoContainer>
        <NavLink href="/">
          <LogoText>BARBER SHOP</LogoText>
        </NavLink>
        <LogoImage src="/logo.png" alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink href="/agendamentos">Agendamentos</NavLink>
        <NavLink href="/local">Localização</NavLink>

        <NavLink
          href="/login"
          onClick={() => localStorage.removeItem("authData")}
        >
          Sair
        </NavLink>
        <NavLink href="/profile">Perfil</NavLink>
       <NavLink>
       </NavLink>
        <AvatarImage src={avatarUrl} alt="Avatar" />
      </NavLinks>
      <Accessibilik />
    </NavbarContainer>
  );
};

export default Navbar;
