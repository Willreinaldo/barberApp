import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Container, Header, Section, Title, Subtitle, Paragraph, List, Footer, Box } from './Sobre.Styles';
import { useNavigate } from 'react-router-dom';


const Sobre: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Container>
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

        <Footer>
          <Paragraph>Venha nos visitar e faça parte da nossa história!</Paragraph>
          <Paragraph>Contato: xxx@xxx.com</Paragraph>
          <Paragraph>Endereço: Rua xxx, xx - Cidade, Estado</Paragraph>

        </Footer>
      </Container>
    </div>
  );
};
    


export default Sobre;