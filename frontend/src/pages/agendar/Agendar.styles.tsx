import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0051b1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #003d8a;
  }
`;
