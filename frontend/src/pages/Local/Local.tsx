import React from 'react';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';
import { LocationContainer, Title, MapContainer } from './Local.style';

const Local: React.FC = () => {
  return (
    <>
      <Navbar />
      <LocationContainer>
        <Title>Localização</Title>
        <MapContainer>
          <Map />
        </MapContainer>
      </LocationContainer>
    </>
  );
};

export default Local;