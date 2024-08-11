// src/components/avatar/AvatarEdit.tsx
import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-edit';
import styled from 'styled-components';

const PhotoUploadContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

interface AvatarEditProps {
  onAvatarChange: (url: string) => void;
}

const AvatarEdit: React.FC<AvatarEditProps> = ({ onAvatarChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onClose = () => {
    setPreview(null);
    onAvatarChange('./avatar.png'); 
  };

  const onCrop = (preview: string) => {
    setPreview(preview);
    onAvatarChange(preview);
  };

  return (
    <PhotoUploadContainer>
      {preview ? (
        <img src={preview} alt="Foto de perfil" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      ) : (
        <AvatarEditor
          width={150}
          height={150}
          onCrop={onCrop}
          onClose={onClose}
          label="foto de perfil"
        />
      )}
    </PhotoUploadContainer>
  );
};

export default AvatarEdit;