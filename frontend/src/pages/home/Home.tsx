import React from 'react';
import { HomeContainer, MainContent, ScheduleButton } from './Home.styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <MainContent>
        <ScheduleButton onClick={() => console.log('Agendar')}>
          Quero Agendar!
        </ScheduleButton>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;