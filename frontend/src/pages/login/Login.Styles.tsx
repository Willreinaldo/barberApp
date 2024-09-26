import styled from "styled-components"; 




export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 60px;
  margin-bottom: 20px;
`;

export const TitleLogo = styled.h1`
  font-size: 2.5rem; /* Altera para um tamanho relativo */
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.8rem; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Mantém a altura da viewport */
  background-color: #0051b1;
  margin: 0; /* Remove margens */
  padding: 0; /* Remove padding */
  overflow: hidden; /* Remove scroll indesejado */
`;

export const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  border-color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;

  /* Adicione uma altura mínima se necessário */
  min-height: 300px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 2rem; /* Altera para um tamanho relativo */
  font-weight: 600;
  margin: 20px 0;

  @media (max-width: 600px) {
    font-size: 1.5rem; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  opacity: 100%; /* Ajuste a opacidade para 100% */
  color: #000;
  font-size: 18px;

  ::placeholder {
    color: #000;
  }

  @media (max-width: 600px) {
    font-size: 16px; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #cccccd;
  }

  @media (max-width: 600px) {
    font-size: 16px; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;

export const Navigator = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 10px;

  span {
    cursor: pointer;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.9rem; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;
