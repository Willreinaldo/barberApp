import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Footer, Paragraph, ImageContainer, StyledImage, ImageWrapper, OverlayText, OverlayTitle, OverlayDescription } from './Servicos.Styles';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../pages/serviços/logo2.png';
import Image2 from '../../pages/serviços/logo3.png';
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>

const Servicos: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar />

      <ImageContainer>
        {/* Wrapper para a imagem e o texto */}
        <ImageWrapper>
          <StyledImage src={Image1} alt="Imagem do serviço 1" />
          <OverlayText>
            <OverlayTitle>Cortes de Cabelo</OverlayTitle>
            <OverlayDescription>
              Nossos especialistas em cortes de cabelo estão atualizados com as últimas tendências e técnicas para garantir que você saia com um visual moderno e personalizado. Do clássico ao contemporâneo, estamos preparados para criar o corte perfeito que realce sua aparência e estilo.
            </OverlayDescription>
          </OverlayText>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Image2} alt="Imagem do serviço 2" />
          <OverlayText>
            <OverlayTitle>Barba e Bigode</OverlayTitle>
            <OverlayDescription>
              Para os barbudos de plantão, oferecemos serviços completos de barba e bigode. Desde o barbear tradicional com navalha até o aparar e modelar da barba, nossos profissionais têm habilidades afiadas para deixar sua barba impecável. Oferecemos também serviços de hidratação e tratamento para manter sua barba saudável e brilhante.
            </OverlayDescription>
          </OverlayText>
        </ImageWrapper>
      </ImageContainer>

      <Footer>
        <Paragraph>Venha nos visitar e faça parte da nossa história!</Paragraph>
        <Paragraph>Contato: xxx@xxx.com</Paragraph>
        <Paragraph>Endereço: Rua xxx, xx - Cidade, Estado</Paragraph>
      </Footer>
    </div>
  );
};

export default Servicos;
