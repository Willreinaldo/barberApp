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

  @media (max-width:500px){
    justify-content: space-evenly;
    align-items: center;
    width: 0%;
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
  background-color: ${({ active }) => (active ? "#1b80ed" : "#D3D3D3")};
  color: #fff;
  font-weight: bold;
`;

export const StepLabel = styled.span`
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;
