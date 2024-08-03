import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.png";

const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0051b1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const TitleLogo = styled.h1`
  font-size: 40px;
  margin: 0;
`;

const Modal = styled.div`
  /* background: #fff; */
  border-color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 36px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de login aqui
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <ModalBackground>
      <Container>
        <Logo src={logo} alt="Logo" />
        <Title>BARBER SHOP</Title>
      </Container>
      <Modal>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
