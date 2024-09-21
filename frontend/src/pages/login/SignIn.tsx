import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ModalBackground,
  Modal,
  Title,
  TitleLogo,
  Logo,
  Container,
  Input,
  Button,
  Navigator
} from "./Login.Styles";
import { signUp } from "../../services/signUp";

const signUpSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

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
    } catch (err:any) {
      alert(err.response.data.message);
      console.warn(err.response.data.message);
    }
  }

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
          placeholder="Email"
          {...register("email")}
          required
        />

        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="text"
          placeholder="Informe seu nome"
          {...register("name")}
          required
        />
        {errors.name && <span>{errors.name.message}</span>}

        <Input
          type="tel"
          maxLength={15}
          placeholder="Informe seu telefone"
          {...register("phone")}
          onChange={handlePhoneChange}
          required
        />
        {errors.phone && <span>{errors.phone.message}</span>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Button type="submit">Criar Conta</Button>
        <Navigator onClick={() => navigate("/login")}>
          Já possui cadastro? <span>Login</span>
        </Navigator>
      </Modal>
    </ModalBackground>
  );
};

export default SignInPage;
