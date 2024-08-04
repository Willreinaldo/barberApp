import React, { useState } from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
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

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de login aqui
    console.log("Email:", email);
    console.log("phone:", phone);
    console.log("name:", name);
    console.log("Password:", password);

  };

  const navigate = useNavigate()

  return (
    <ModalBackground>
      <Container onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <TitleLogo>BARBER SHOP</TitleLogo>
      </Container>
      <Modal>
        <Title>Cadastro</Title>
        <Input
          type="email"
          placeholder="Informe seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Informe seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Informe seu telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <Navigator href="/login">
          Já possui cadastro? <span>Login</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default SignInPage;