// src/pages/profile/Profile.tsx
import React, { useState } from 'react';
import ReactCrop, { Crop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { ProfileContainer, PhotoUpload, Input, Button } from './Profile.Styles';

const Profile: React.FC = () => {
  // Valores iniciais
  const initialValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    password: '********',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [tempValues, setTempValues] = useState(initialValues);

  // Estados para imagem e recorte
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

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
    setTempValues(values); // Restaura os valores anteriores
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValues({ ...tempValues, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <PhotoUpload>
          {croppedImageUrl ? (
            <img src={croppedImageUrl} alt="Foto de perfil" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
          ) : (
            <div>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {image && (
                <ReactCrop
                  crop={crop}
                  onChange={setCrop}
                  style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                />
              )}
            </div>
          )}
        </PhotoUpload>
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