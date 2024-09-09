// src/components/navbar/Navbar.styles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 10px 20px;
  background-color: #0051B1;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha em telas pequenas */
}
  @media (max-width: 650x) {
    flex-direction: column; /* Empilha em telas pequenas */
}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: #fff;
  margin-right: 10px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;