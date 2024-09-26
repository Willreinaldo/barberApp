import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  ErrorModal,
  ErrorModalContent,
} from "../../components/ModalAlert/AlertBox";
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

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function doLogin(data: LoginFormData) {
    console.log(data);
    try {
      const userData = await signIn(data);
      if (userData) {
        setAuthData({ user: userData.user, token: userData.token });
        navigate("/agendar");
      }
      navigate("/agendar");
    } catch (err: any) {
      // console.log(err.response.data.message);
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        err.response.data.message,
      ]);
      setShowErrorModal(true);
    }
  }

  useEffect(() => {
    const newErrors: string[] = [];

    if (errors.email) {
      newErrors.push(errors.email.message || "Erro no campo de email.");
    }

    if (errors.password) {
      newErrors.push(errors.password.message || "Erro no campo de senha.");
    }

    if (newErrors.length > 0) {
      setErrorMessages(newErrors);
      setShowErrorModal(true);
    }
  }, [errors]);

  useEffect(() => {
    if (showErrorModal) {
      const timer = setTimeout(() => {
        setShowErrorModal(false);
        setErrorMessages([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showErrorModal]);
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
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <Button type="submit">Entrar</Button>
        <Navigator onClick={() => navigate("/signin")}>
          Não possui cadastro? <span>Cadastrar</span>
        </Navigator>
      </Modal>
      {showErrorModal && (
        <ErrorModal>
          <ErrorModalContent>
            {errorMessages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </ErrorModalContent>
        </ErrorModal>
      )}
    </ModalBackground>
  );
};

export default LoginPage;
