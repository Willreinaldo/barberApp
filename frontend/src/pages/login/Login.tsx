import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuthContext } from "../../contexts/AuthContext";
import { signIn } from "../../services/signIn";
import {
  Button,
  Container,
  Input,
  Logo,
  Modal,
  ModalBackground,
  Navigator,
  Title,
  TitleLogo,
} from "./Login.Styles";
import logo from "./logo.png";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const { setAuthData } = useAuthContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function doLogin(data: LoginFormData) {
    try {
      const userData = await signIn(data);
      console.log(userData);
      if (userData) {
        setAuthData({ user: userData.user, token: userData.token });
        navigate("/home");
      }
      navigate("/home");
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
      <Modal onSubmit={handleSubmit(doLogin)}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          required
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit">Entrar</Button>
        <Navigator onClick={() => navigate("/signin")}>
          Não possui cadastro? <span>Cadastrar</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
