import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 10px 20px;
  background-color: #0051B1;

  @media (max-width: 768px) {
    flex-direction: column;  
  }

  @media (max-width: 650px) 
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: #fff;
  margin-right: 10px;
  font-size: clamp(1rem, 2vw + 1rem, 2.5rem); /* Fonte responsiva */
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha links em telas menores */
  }
`;

export const NavLink = styled.a`
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  font-size: clamp(0.875rem, 1vw + 1rem, 1.25rem); /* Fonte responsiva */

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px; /* Adiciona espaço entre links empilhados */
  }
`;

export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
