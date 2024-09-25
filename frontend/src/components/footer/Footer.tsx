import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #0051B1;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Barber Shop. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;