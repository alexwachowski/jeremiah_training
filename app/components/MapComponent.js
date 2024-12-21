"use client"


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComponent = () => {
  const position = [29.9915, -98.0915]; // Approximate latitude/longitude for "2V2X+6M"
  if (typeof window === 'undefined') {
    return null; // Skip rendering on the server
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>Jeremiah Hernandez - Training Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
