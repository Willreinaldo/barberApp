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
import { signUp } from "../../services/signUp";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  function handleForm(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function createAccount(e:any) {
    e.preventDefault();
    try {
      const userData = await signUp(form);
      console.log(userData);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      console.warn(err);
      alert("Usuário ou senha indisponiveis");
    }
  }

  return (
    <ModalBackground>
      <Container onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <TitleLogo>BARBER SHOP</TitleLogo>
      </Container>
      <Modal onSubmit={createAccount}>
        <Title>Cadastro</Title>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          type="text"
          name="name"
          placeholder="Informe seu nome"
          value={form.name}
          onChange={handleForm}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Informe seu telefone"
          value={form.phone}
          onChange={handleForm}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleForm}
        />
        <Button type="submit">Criar Conta</Button>
        <Navigator onClick={() => navigate("/login")}>
          Já possui cadastro? <span>Login</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default SignInPage;
