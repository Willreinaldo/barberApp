// src/pages/profile/Profile.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarEdit from "../../components/avatar/AvatarEdit";
import { useAuthContext, User } from "../../contexts/AuthContext";
import {
  Button,
  ButtonContainer,
  Input,
  ModalContainer,
  ModalBackground,
  ModalTitle,
  ProfileContainer,
  OpenModalButton,
  ButtonModal,
} from "./Profile.Styles";
import axios from "axios";

const Profile: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { authData, setAuthData } = useAuthContext();
  const user = authData?.user;
  const token = authData?.token;

  interface UpdateUserData {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    avatarUrl?: string;
  }

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    password: "",
    id: user?.id ?? 0,
    createdAt: user?.createdAt || new Date(),
    updatedAt: user?.updatedAt || new Date(),
  };

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [tempValues, setTempValues] = useState(initialValues);
  const [avatarUrl, setAvatarUrl] = useState<string>(
    user?.avatarUrl || "./avatar.png"
  );

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: "********",
        id: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
      setAvatarUrl(user.avatarUrl || "./avatar.png");
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempValues(values);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    setValues(tempValues);

    const updatedData: UpdateUserData = { ...tempValues, avatarUrl };

    // Remove o campo de senha se não houver alteração
    if (values.password === tempValues.password) {
      delete updatedData.password;
    }

    try {
      console.log("updatedData: ", updatedData);
      const response = await fetch(`${apiUrl}/users/user/${user?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedData }),
      });
      if (response.ok) {
        console.log(response.ok);
        const updatedUser: User = await response.json();
        setAuthData({ user: updatedUser, token: authData?.token || "" });
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempValues(values);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValues({ ...tempValues, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (newAvatarUrl: string) => {
    setAvatarUrl(newAvatarUrl);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteAccount = () => {
    axios
      .delete(`${apiUrl}/users/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        localStorage.removeItem("authData");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Erro ao deletar usuário:", error);
      });
  };

  return (
    <ProfileContainer>
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <ModalTitle>Deseja excluir sua conta?</ModalTitle>
            <ButtonContainer>
              <ButtonModal className="cancel" onClick={closeModal}>
                Cancelar
              </ButtonModal>
              <ButtonModal className="delete" onClick={deleteAccount}>
                Excluir Conta
              </ButtonModal>
            </ButtonContainer>
          </ModalContainer>
        </ModalBackground>
      )}
      {isEditing ? (
        <AvatarEdit
          onAvatarChange={handleAvatarChange}
          currentAvatarUrl={avatarUrl}
        />
      ) : (
        <img
          src={avatarUrl}
          alt="Avatar"
          style={{ borderRadius: "50%", width: "10em", height: "10em" }}
        />
      )}
      <Input
        type="text"
        name="name"
        value={isEditing ? tempValues.name : values.name}
        readOnly={!isEditing}
        onChange={handleChange}
        placeholder="Nome"
      />
      <Input
        type="email"
        name="email"
        value={isEditing ? tempValues.email : values.email}
        readOnly={!isEditing}
        onChange={handleChange}
        placeholder="Email"
      />
      <Input
        type="tel"
        name="phone"
        value={isEditing ? tempValues.phone : values.phone}
        readOnly={!isEditing}
        onChange={handleChange}
        placeholder="Telefone"
      />
      <Input
        type="password"
        name="password"
        value={isEditing ? tempValues.password : ""}
        readOnly={!isEditing}
        onChange={handleChange}
        placeholder="Senha"
      />
      {!isEditing ? (
        <Button onClick={handleEditClick}>Editar meus dados</Button>
      ) : (
        <>
          <Button onClick={handleSaveClick}>Salvar</Button>
          <OpenModalButton onClick={openModal}>Excluir Conta</OpenModalButton>
          <Button onClick={handleCancelClick}>Cancelar</Button>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
