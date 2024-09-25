import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.9em;
  color: #666;
  padding: 20px 0;
  background-color: #333;
  color: white;
`;

export const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1em;
  margin: 10px 0;

  /* Responsividade para Paragraph */
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;