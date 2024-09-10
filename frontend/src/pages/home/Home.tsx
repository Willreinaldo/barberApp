import React from 'react';
import { HomeContainer, MainContent, ScheduleButton } from './Home.styles';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <MainContent>
        <ScheduleButton onClick={() => navigate("/agendar")}>
          Quero Agendar!
        </ScheduleButton>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;