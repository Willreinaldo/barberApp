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
import { signIn } from "../../services/signIn";

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
      console.log(userData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <ModalBackground>
      <Container onClick={() => navigate("/")}>
        <Logo src={logo} alt="Logo" />
        <TitleLogo>BARBER SHOP</TitleLogo>
      </Container>
      <Modal onSubmit={doLogin}>
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
        <Button type="submit">Entrar</Button>
        <Navigator onClick={() => navigate("/signin")}>
          Não possui cadastro? <span>Cadastrar</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
function toast(arg0: string) {
  throw new Error("Function not implemented.");
}

