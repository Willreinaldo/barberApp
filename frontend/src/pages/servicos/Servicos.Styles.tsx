import styled from 'styled-components';

// Wrapper para a imagem e o texto sobreposto
export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  perspective: 1000px; /* Dá o efeito de profundidade 3D */
  
  &:hover {
    /* Aplica a rotação na imagem ao passar o mouse */
    img {
      transform: rotateY(180deg);
    }
    
    /* Exibe o texto sobre a imagem */
    div {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`;

// Imagem estilizada com rotação
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s ease;
  backface-visibility: hidden; /* Oculta o lado de trás da imagem */
`;

// Texto que será exibido sobre a imagem
export const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
  color: white;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
  transform: rotateY(180deg); /* Inicia com a rotação inversa */
  backface-visibility: hidden; /* Oculta o lado de trás do texto */
`;

// Contêiner de imagens
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

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
