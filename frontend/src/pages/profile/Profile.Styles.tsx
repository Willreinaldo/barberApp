// src/pages/profile/ProfileStyles.tsx
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.45em;
  background-color: #f5f5f5;
  min-height: 100vh; /* Garante que ocupe toda a altura da tela */
  box-sizing: border-box; /* Inclui padding na altura total */
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
  background-color: #0051b1;
  color: #fff;
  cursor: pointer;
  margin: 10px 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonModal = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &.cancel {
    background-color: #0051b1;
    color: #fff;
  }

  &.delete {
    background-color: #e74c3c;
    color: white;
  }
`;

export const OpenModalButton = styled.button`
  padding: 10px 20px;
  background-color: #0051b1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
