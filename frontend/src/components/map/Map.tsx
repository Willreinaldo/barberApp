import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

 
const customIcon = new L.Icon({
  iconUrl: '/location.png',  
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map: React.FC = () => {
   const barberShopLocation = {
    lat: -6.888062636727218,  
    lng: -38.552855792181795   
  };

  return (
    <MapContainer
      center={barberShopLocation}
      zoom={20}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={barberShopLocation} icon={customIcon}>
        <Popup>
          <strong>Barbearia BarberShop</strong><br/>
          Localizada no Shopping Center da cidade - 
           Av. Cmte. Vital Rolim, 989 - Jardim Adalgiza II, Cajazeiras - PB, 58900-000

        </Popup>
      </Marker>
      <ZoomControl position="bottomright" /> 
    </MapContainer>
  );
};

export default Map;