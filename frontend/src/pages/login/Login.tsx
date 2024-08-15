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
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm(e:any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function doLogin(e:any) {
    e.preventDefault();
    try {
      const userData = await signIn(form);
      // setUserData(userData);
      toast("Login realizado com sucesso!");
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
      toast(err.response.data.message);
    }
  }


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
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleForm}
        />
        <Button onClick={doLogin}>Entrar</Button>
        <Navigator onClick={() => navigate("/signin")}>
          Não possui cadastro? <span>Cadastrar</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
