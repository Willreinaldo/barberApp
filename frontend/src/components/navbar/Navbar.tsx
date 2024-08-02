import React from 'react';
import {
  NavbarContainer,
  LogoContainer,
  LogoText,
  LogoImage,
  NavLinks,
  NavLink
} from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <NavLink href="/"><LogoText>BARBER SHOP</LogoText></NavLink>
        <LogoImage src="/logo.png" alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink href="/agendamentos">Agendamentos</NavLink>
        <NavLink href="/profile">Perfil</NavLink>
        <NavLink href="/local">Localização</NavLink>
        <NavLink href="/sair">Sair</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;