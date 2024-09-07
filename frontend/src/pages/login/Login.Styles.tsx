import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0051b1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 60px;
  margin-bottom: 20px;
`;

export const TitleLogo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Modal = styled.form`
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  border-color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: 600;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  opacity: 50%;
  color: #000;
  font-size: 18px;
  ::placeholder {
    color: #000;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #cccccd;
  }
`;

export const Navigator = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 10px;

  span {
    cursor: pointer;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;
