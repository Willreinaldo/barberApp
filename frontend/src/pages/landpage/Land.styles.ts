import { styled } from "styled-components";

export const ScheduleButton = styled.button`
  width: 231px;
  height: 67px;
  font-size: 1.5rem;
  background-color: #0051b1;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    background-color: #0051b1;
    transform: scale(1.05);
  }
`;

export const CascadeWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Image = styled.img<{ offsetx: number; offsety: number }>`
  position: absolute;
  top: ${(props) => props.offsety}px;
  left: ${(props) => props.offsetx}px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
export const LogoCenter = styled.div`
  width: 11px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #ffffff;

  @media (max-width: 600px) {
    justify-content: baseline;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 180px;
  gap: 300px;
  justify-content: center;
  /* align-items: center; */
  padding: 20px;
  background-color: #0051b1;
  color: white;
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

export const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const ProfileIcon = styled.div`
  font-size: 32px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 80px; /* Ajuste conforme necessário */
  width: 80%;
  max-width: 700px;
  height: 250px;
  background-color: #ddd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Main = styled.div`
  width: 100vw;
  position: relative;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  background-color: #2c2c2c;

  h2 {
    font-weight: bold;
    font-size: 36px;
    margin: 20px;
    color: white;
  }

  @media (max-width: 600px) {
    gap: 20px;
    height: auto;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    h2 {
      font-size: 28px;
    }
  }
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100vw;
  background-color: #2c2c2c;
  padding-left: 20px;

  @media (max-width: 1350px) {
    height: 80px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 200px;
  width: 350px;
  /* left: 400px; */
  margin-right: 500px;
  height: 249px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000000;
  }
  p {
    font-weight: bold;
  }
  span {
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    top: 250px;
  }
  @media (max-width: 840px) {
    margin-right: 350px;
  }
  @media (max-width: 600px) {
    margin: 0;
    position: static;
  }
`;

export const Box2 = styled.div`
  position: absolute;
  top: 200px;
  width: 350px;
  margin-left: 500px;
  /* right: 400px; */
  height: 249px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000000;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  @media (max-width: 1024px) {
    top: 250px;
  }
  @media (max-width: 840px) {
    margin-left: 350px;
  }
  @media (max-width: 600px) {
    margin: 0;
    position: static;
  }
`;

export const DaySchedule = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  height: 100%;
  justify-content: space-evenly;
  margin: 8px 0;
  /* background-color: orange; */
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* background-color: orange; */
`;
