import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Footer, Paragraph, ImageContainer, StyledImage, ImageWrapper, OverlayText } from './Servicos.Styles';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../pages/serviços/logo2.png';
import Image2 from '../../pages/serviços/logo3.png';


const Servicos: React.FC = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Navbar />

        <ImageContainer>
        {/* Wrapper para a imagem e o texto */}
        <ImageWrapper>
          <StyledImage src={Image1} alt="Imagem do serviço 1" />
          <OverlayText>Descrição do Serviço 1</OverlayText>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={Image2} alt="Imagem do serviço 2" />
          <OverlayText>Descrição do Serviço 2</OverlayText>
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