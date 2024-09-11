import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import screen from "./screen_mural.jpeg";

const Landpage: React.FC = () => {
  return (
    <Container>
      <Header>
        <PageTitle>BARBER SHOP</PageTitle>
        <ProfileIcon>
          <CgProfile size={40} />
        </ProfileIcon>
      </Header>
      <ImageContainer>
        <Image src={screen} alt="imagem da landpage" />
      </ImageContainer>
    
    <Main></Main>

    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #ffffff;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  height: 180px;
  gap: 300px;
  justify-content: center;
  /* align-items: center; */
  padding: 20px;
  background-color: #0051b1;
  color: white;
`;

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const ProfileIcon = styled.div`
  font-size: 32px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 80px; /* Ajuste conforme necessário */
  width: 80%;
  max-width: 700px;
  height: 280px;
  background-color: #ddd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.div`
    width: 100vw;
    height: 300px;
    margin-top: 200px;
    background-color: #2c2c2c;
`

export default Landpage;
