import React from 'react';
import styled from 'styled-components';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0051B1;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const MapContainer = styled.div`
  width: 70%;
  height: 500px; // Ajuste a altura conforme necessário
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Local: React.FC = () => {
  return (
    <>
    <Navbar></Navbar>
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