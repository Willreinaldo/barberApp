import styled from "styled-components";

export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 20px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Step = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#FFD700" : "#D3D3D3")};
  color: #fff;
  font-weight: bold;
`;

export const StepLabel = styled.span`
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;
