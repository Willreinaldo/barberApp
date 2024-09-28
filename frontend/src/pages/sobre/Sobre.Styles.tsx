import styled from "styled-components";
import BackgroundImage from "../../pages/sobre/background2.jpg"; // Imagem de fundo

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    /* Adiciona estilos diretamente ao título */
    font-size: 3em; /* Aumenta o tamanho da fonte */
    color: #ffd700; /* Muda a cor para dourado para mais destaque */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Adiciona sombra para melhor legibilidade */
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas lado a lado */
  grid-gap: 20px; /* Espaçamento entre as caixas */
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Empilha as caixas no mobile */
  }
`;

export const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Fundo preto transparente */
  border: none; /* Remove bordas */
  box-shadow: none; /* Remove a sombra */
  padding: 20px; /* Adiciona padding para um melhor espaçamento interno */
  transition: transform 0.2s;

  /* Efeito ao passar o mouse */
  &:hover {
    transform: scale(
      1.02
    ); /* Mantém um efeito leve ao passar o mouse, se desejado */
  }
`;
export const Title = styled.h1`
  color: #333;
  font-family: "Georgia", serif;
  font-size: 2.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Subtitle = styled.h2`
  color: #ffd700; /* Amarelo dourado intenso */
  font-family: "Arial", sans-serif;
  font-size: 1.8em;
  margin: 20px 0 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Paragraph = styled.p`
  color: #ffffff; /* Branco intenso */
  line-height: 1.8;
  font-size: 1em;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;

  li {
    padding: 5px 0;
    position: relative;
    margin-left: 20px;
    color: #ffffff; /* Branco */
  }
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.9em;
  color: #666;
  padding: 20px 0;
  background-color: #333;
  color: white;
  position: fixed;
  width: 100vw;
  bottom: 0;
`;

// Nova grid para imagens
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Mesma estrutura de 3 colunas */
  grid-gap: 20px; /* Espaçamento entre as imagens */
  justify-items: center; /* Centraliza as imagens dentro de cada célula */
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Empilha as imagens no mobile */
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 10emm;
  height: 300px;
  perspective: 1000px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  &:hover {
    img {
      transform: rotateY(180deg);
    }

    div {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s ease;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

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
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
  transform: rotateY(180deg);
  backface-visibility: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const OverlayTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffd700;
  text-align: center;
  font-family: "Playfair Display", serif;
`;

export const OverlayDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  text-align: center;
  max-width: 90%;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
  margin-bottom: 200px;
`;
