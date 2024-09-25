import styled from 'styled-components';

// Wrapper para a imagem e o texto sobreposto
export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  perspective: 1000px; /* Dá o efeito de profundidade 3D */

  @media (max-width: 768px) {
    width: 100%; /* Faz a imagem ocupar toda a largura em dispositivos móveis */
  }

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

// Texto sobreposto
export const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
  color: white;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
  transform: rotateY(180deg); /* Inicia com a rotação inversa */
  backface-visibility: hidden; /* Oculta o lado de trás do texto */
  
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Diminui o tamanho do texto em dispositivos menores */
  }
`;

// Título destacado com Playfair Display
export const OverlayTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFD700; /* Cor dourada para destaque */
  text-align: center;
  font-family: 'Playfair Display', serif; /* Aplica a fonte Playfair Display */
`;

// Descrição organizada com Roboto
export const OverlayDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  text-align: center;
  max-width: 80%;
  font-family: 'Roboto', sans-serif; /* Aplica a fonte Roboto */

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Ajusta o tamanho da descrição em telas menores */
  }
`;

// Contêiner de imagens
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha as imagens verticalmente em telas menores */
    gap: 10px; /* Reduz o espaçamento entre as imagens */
  }
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo */
  align-items: center; /* Alinha verticalmente */
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column; /* Alinha verticalmente em tablets e dispositivos menores */
    padding: 10px;
  }
`;

export const TextContainer = styled.div`
  max-width: 50%; /* Limita a largura do texto */
  margin-right: 10px; /* Reduz o espaço à direita do texto */
  text-align: right; /* Alinha o texto à direita para ficar próximo da imagem */

  @media (max-width: 1024px) {
    max-width: 100%; /* Faz o texto ocupar toda a largura em dispositivos menores */
    text-align: center; /* Centraliza o texto em telas menores */
    margin-right: 0; /* Remove o espaçamento lateral */
  }
`;

export const StyledImageLarge = styled.img`
  width: 570px;
  height: 712px;
  object-fit: cover; /* Garante que a imagem mantenha suas proporções */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 100%; /* A imagem ocupa 100% da largura do container em telas menores */
    height: auto;
  }
`;

export const HighlightedTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem; /* Aumenta o tamanho da frase */
  color: #000; /* Cor preta */
  margin-bottom: 20px; /* Aumenta o espaçamento entre o título e o texto */
  text-align: left; /* Alinha o título à esquerda */

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o tamanho do título em telas menores */
    text-align: center; /* Centraliza o título em dispositivos menores */
  }
`;

export const Paragraph2 = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.2em; /* Um pouco maior para melhor legibilidade */
  margin: 10px 0;
  text-align: left; /* Alinha o texto abaixo à esquerda também */

  /* Responsividade para Paragraph */
  @media (max-width: 768px) {
    font-size: 1em; /* Reduz o tamanho da fonte em dispositivos menores */
    text-align: center; /* Centraliza o texto em dispositivos menores */
  }
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
