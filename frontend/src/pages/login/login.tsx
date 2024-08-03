import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  background-color: #0051B1;
`;

const Modal = styled.div`
  /* background: #fff; */
  border-color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  /* width: 100%; */
  text-align: center;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ModalBackground>
      <Modal>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Modal>
    </ModalBackground>
  );
};

export default LoginPage;
