import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { HomeContainer, MainContent, ScheduleButton } from './Home.styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MainContent>
        <ScheduleButton onClick={() => console.log('Agendar')}>
          Quero Agendar!
        </ScheduleButton>
      </MainContent>
      <Footer />
    </HomeContainer>
  );
};

export default Home;