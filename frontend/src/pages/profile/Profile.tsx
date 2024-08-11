// src/pages/profile/Profile.tsx
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import { ProfileContainer, Input, Button } from './Profile.Styles';
import AvatarEdit from '../../components/avatar/AvatarEdit';

const Profile: React.FC = () => {
  const initialValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    password: '********',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [tempValues, setTempValues] = useState(initialValues);
  const [avatarUrl, setAvatarUrl] = useState<string>('./avatar.png'); // Inicialize com o valor padrão

  const handleEditClick = () => {
    setIsEditing(true);
    setTempValues(values);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setValues(tempValues);
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

  return (
    <>
      <ProfileContainer>
        <AvatarEdit onAvatarChange={handleAvatarChange} />
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
          value={isEditing ? tempValues.password : values.password}
          readOnly={!isEditing}
          onChange={handleChange}
          placeholder="Senha"
        />
        {!isEditing ? (
          <Button onClick={handleEditClick}>Editar meus dados</Button>
        ) : (
          <>
            <Button onClick={handleSaveClick}>Salvar</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
          </>
        )}
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;