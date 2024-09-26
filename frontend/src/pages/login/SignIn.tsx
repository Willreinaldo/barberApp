import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  ErrorModal,
  ErrorModalContent,
} from "../../components/ModalAlert/AlertBox";
import { signUp } from "../../services/signUp";
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

const signUpSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    let phone = e.target.value;
    phone = phone.replace(/\D/g, "");

    if (phone.length <= 10) {
      phone = phone.replace(/(\d{2})(\d)/, "($1) $2");
      phone = phone.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      phone = phone.replace(/(\d{2})(\d)/, "($1) $2");
      phone = phone.replace(/(\d{5})(\d)/, "$1-$2");
    }

    setValue("phone", phone);
  }

  async function createAccount(data: SignUpFormData) {
    try {
      const userData = await signUp(data);
      console.log(userData);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err: any) {
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

    if (errors.name) {
      newErrors.push(errors.name.message || "Erro no campo do nome.");
    }

    if (errors.phone) {
      newErrors.push(errors.phone.message || "Erro no campo de telefone:");
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
      <Modal onSubmit={handleSubmit(createAccount)}>
        <Title>Cadastro</Title>

        <Input
          type="email"
          placeholder="Informe seu email"
          {...register("email")}
        />

        <Input
          type="text"
          placeholder="Informe seu nome"
          {...register("name")}
        />

        <Input
          type="tel"
          maxLength={15}
          placeholder="Informe seu telefone"
          {...register("phone")}
          onChange={handlePhoneChange}
        />

        <Input
          type="password"
          placeholder="Crie sua senha"
          {...register("password")}
        />

        <Button type="submit">Criar Conta</Button>
        <Navigator onClick={() => navigate("/login")}>
          Já possui cadastro? <span>Login</span>
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

export default SignInPage;
