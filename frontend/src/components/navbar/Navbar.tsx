// src/components/navbar/Navbar.tsx
import React from 'react';
import { useNavbarContext } from '../../contexts/NavbarContext';
import {
  NavbarContainer,
  LogoContainer,
  LogoText,
  LogoImage,
  NavLinks,
  NavLink,
  AvatarImage
} from './Navbar.styles';
import AvatarEdit from '../avatar/AvatarEdit';
import { useNavigate } from "react-router-dom";
 

const Navbar: React.FC = () => {
  const { avatarUrl } = useNavbarContext();
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <LogoContainer>
        <NavLink href="/"><LogoText>BARBER SHOP</LogoText></NavLink>
        <LogoImage src="/logo.png" alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink href="/agendamentos">Agendamentos</NavLink>
        <NavLink href="/local">Localização</NavLink>
        <NavLink href="/sair">Sair</NavLink>
        <NavLink href="/profile">Perfil</NavLink>
        <AvatarImage src={avatarUrl} alt="Avatar" />
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;