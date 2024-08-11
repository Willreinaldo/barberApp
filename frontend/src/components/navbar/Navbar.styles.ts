// src/components/navbar/Navbar.styles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0051B1;
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