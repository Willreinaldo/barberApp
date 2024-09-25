// src/components/navbar/Navbar.tsx
import React from "react";
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

const Navbar: React.FC = () => {
  const { avatarUrl } = useNavbarContext();

  return (
    <NavbarContainer>
      <LogoContainer>
        <NavLink href="/agendar">
          <LogoText>BARBER SHOP</LogoText>
        </NavLink>
        <LogoImage src="/logo.png" alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink href="/agendamentos">Agendamentos</NavLink>
        <NavLink href="/avaliacoes">Avaliações</NavLink>
        <NavLink href="/local">Localização</NavLink>
        <NavLink
          href="/login"
          onClick={() => localStorage.removeItem("authData")}
        >
          Sair
        </NavLink>
        <NavLink href="/profile">Perfil</NavLink>
        <AvatarImage src={avatarUrl} alt="Avatar" />
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
