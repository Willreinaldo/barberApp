import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Header, Section, Title, Subtitle, Paragraph, List, Footer, Box, ImageGrid, ImageWrapper, StyledImage, OverlayText, OverlayTitle, OverlayDescription, ContentContainer } from './Sobre.Styles';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../pages/sobre/logo4.png';
import Image2 from '../../pages/sobre/logo5.png';
import Image3 from '../../pages/sobre/logo6.png';
import BackgroundImage from '../../pages/sobre/background.jpg'; // Imagem de fundo

const Sobre: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      
      {/* Container que engloba o conteúdo principal e aplica a imagem de fundo */}
      <ContentContainer>
        <Header>
          <Title>Nosso compromisso</Title>
        </Header>

        <Section>
          <Box>
            <Subtitle>Nossa Missão</Subtitle>
            <Paragraph>
              Proporcionar uma experiência única e personalizada para cada cliente, 
              com cortes de cabelo e serviços de barbearia de alta qualidade, 
              em um ambiente acolhedor e amigável.
            </Paragraph>
          </Box>

          <Box>
            <Subtitle>Nossa Visão</Subtitle>
            <Paragraph>
              Ser reconhecida como a melhor barbearia da cidade, onde os clientes 
              possam se sentir em casa e sair satisfeitos com seu novo visual.
            </Paragraph>
          </Box>

          <Box>
            <Subtitle>Nossos Valores</Subtitle>
            <List>
              <li>Qualidade no atendimento</li>
              <li>Respeito e profissionalismo</li>
              <li>Inovação e criatividade</li>
              <li>Valorização da tradição da barbearia</li>
            </List>
          </Box>
        </Section>

        <ImageGrid>
          <ImageWrapper>
            <StyledImage src={Image1} alt="Imagem do serviço 1" />
            <OverlayText>
              <OverlayTitle>Barba</OverlayTitle>
              <OverlayDescription>
                Descubra o poder da barba perfeita. Nossos especialistas em barbearia oferecem serviços premium, desde aparar e modelar até cuidados específicos para manter sua barba impecável.
              </OverlayDescription>
            </OverlayText>
          </ImageWrapper>

          <ImageWrapper>
            <StyledImage src={Image2} alt="Imagem do serviço 2" />
            <OverlayText>
              <OverlayTitle>Cabelo</OverlayTitle>
              <OverlayDescription>
                Seu cabelo é sua assinatura de estilo. Nossa equipe de profissionais experientes está pronta para cuidar dos seus fios, oferecendo cortes e penteados personalizados que elevam seu visual.
              </OverlayDescription>
            </OverlayText>
          </ImageWrapper>

          <ImageWrapper>
            <StyledImage src={Image3} alt="Imagem do serviço 3" />
            <OverlayText>
              <OverlayTitle>Transformação</OverlayTitle>
              <OverlayDescription>
                Acreditamos que a transformação começa de dentro para fora. Na Barbearia A Banca, valorizamos a individualidade de cada cliente e buscamos proporcionar uma experiência que vá além do visual.
              </OverlayDescription>
            </OverlayText>
          </ImageWrapper>
        </ImageGrid>
      </ContentContainer>

      <Footer>
        <Paragraph>Venha nos visitar e faça parte da nossa história!</Paragraph>
        <Paragraph>Contato: xxx@xxx.com</Paragraph>
        <Paragraph> Localizada no Shopping Center da cidade - 
        Av. Cmte. Vital Rolim, 989 - Jardim Adalgiza II, Cajazeiras - PB, 58900-000</Paragraph>
      </Footer>
    </div>
  );
};

export default Sobre;
