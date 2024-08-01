import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScheduleButton = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  background-color: #0051B1;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;