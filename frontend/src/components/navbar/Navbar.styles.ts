import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0051B1;
  color: #fff;
  height: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  margin-left: 10px;
  height: 40px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;