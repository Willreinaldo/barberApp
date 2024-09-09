// src/pages/profile/ProfileStyles.tsx
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.45em;
  background-color: #f5f5f5;
`;

export const PhotoUpload = styled.div`
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

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #0051B1;
  color: #fff;
  cursor: pointer;
  margin: 10px 0;
`;