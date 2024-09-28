import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 79vh;
  justify-content: space-evenly; 

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 80px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 20px 0;
`;

export const Step = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#FFD700' : '#D3D3D3')}; /* Amarelo para ativo, cinza para inativo */
  color: #fff;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;
export const StepLabel = styled.span`
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  width: 14rem;
  height: 4rem;
  border: none;
  border-radius: 4px;
  background-color: #0051b1;
  color: #fff;
  cursor: pointer;
  font-size:1.2em;
  
  &:hover {
    background-color: #0041a1;
  }

  @media (max-width:500px){
    width: 10rem;
    height: 3rem;
  }
`;