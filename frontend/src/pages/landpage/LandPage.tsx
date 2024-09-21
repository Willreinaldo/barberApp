import React from "react";
import { CgProfile } from "react-icons/cg";
import screen from "./screen_mural.jpeg";
import logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  CascadeWrapper,
  Image,
  ScheduleButton,
  LogoCenter,
  Container,
  Header,
  PageTitle,
  ProfileIcon,
  ImageContainer,
  ImageLogo,
  Main,
  Footer,
  Box,
  Box2,
  DaySchedule,
  Content,
} from "./Land.styles";
import beard from "../../assets/beard.png";
import { useNavigate } from "react-router-dom";
const Landpage: React.FC = () => {
  const userData: any = localStorage.getItem("authData");
  const data = JSON.parse(userData);
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <PageTitle>BARBER SHOP</PageTitle>
        <ProfileIcon
          onClick={() => (data ? navigate("/home") : navigate("/login"))}
        >
          <CgProfile size={40} />
        </ProfileIcon>
      </Header>
      <ImageContainer>
        <ImageLogo src={screen} alt="imagem da landpage" />
      </ImageContainer>

      <Main>
        <h2>Faça o seu agendamento</h2>
        <Content>
          <CascadeWrapper>
            <Image src={beard} alt="Imagem 1" offsetx={0} offsety={0} />
            <Image src={beard} alt="Imagem 2" offsetx={20} offsety={20} />
            <Image src={beard} alt="Imagem 3" offsetx={40} offsety={40} />
          </CascadeWrapper>
          <LogoCenter>
            <img src={logo} alt="logo do sistema" />
          </LogoCenter>
          <ScheduleButton
            onClick={() => (data ? navigate("/") : navigate("/agendar"))}
          >
            Quero Agendar!
          </ScheduleButton>
        </Content>
        <Box>
          <h2>Horários de Atendimento</h2>
          <DaySchedule>
            <p>
              Dom:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Seg:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Ter:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Qua:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Qui:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Sex:
              <br /> <span>07:00 - 11:00</span>
            </p>
            <p>
              Sab:
              <br /> <span>07:00 - 11:00</span>
            </p>
          </DaySchedule>
        </Box>
        <Box2>
          <h2>Nossas redes sociais:</h2>
          <div>
            <FaInstagram size={32} />
            <FaFacebook size={32} />
            <FaLinkedin size={32} />
          </div>
          <h2>Telefone:</h2>
          <span>(83) 99999-0000</span>
        </Box2>
      </Main>
      <Footer>
        <img src={logo} alt="logo do sistema" />
      </Footer>
    </Container>
  );
};

export default Landpage;
