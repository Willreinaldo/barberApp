import styled from 'styled-components';

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0051B1;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

export const MapContainer = styled.div`
  width: 70%;
  height: 500px; // Ajuste a altura conforme necessário
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;