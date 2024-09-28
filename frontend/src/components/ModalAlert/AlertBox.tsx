import styled from "styled-components";

export const ErrorModal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.9);
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
  width: 80%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const ErrorModalContent = styled.div`
  font-size: 16px;
  p {
    margin: 0 0 10px 0;
  }
`;
