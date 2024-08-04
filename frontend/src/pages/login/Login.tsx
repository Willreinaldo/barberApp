import React, { useState } from "react";
import logo from "./logo.png";
import {
  ModalBackground,
  Modal,
  Title,
  TitleLogo,
  Logo,
  Container,
  Input,
  Button,
  Navigator,
} from "./Login.Styles";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de login aqui
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const navigate = useNavigate();

  return (
    <ModalBackground>
      <Container onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <TitleLogo>BARBER SHOP</TitleLogo>
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
        <Button onClick={handleLogin}>Entrar</Button>
        <Navigator onClick={() => navigate("/signin")}>
          Não possui cadastro? <span>Cadastrar</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
