// // components/MapComponent.js


// import { useEffect } from 'react';
// import L from 'leaflet';

// const MapComponent = () => {
//   useEffect(() => {
//     // Initialize the map when the component is mounted on the client side
//     const map = L.map('map').setView([30.035, -98.092], 13); // Coordinates for Wimberley, TX

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     // Add a marker
//     L.marker([30.035, -98.092])
//       .addTo(map)
//       .bindPopup('Jeremiah Hernandez - Training Location')
//       .openPopup();

//     // Cleanup function to remove the map instance when the component unmounts
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map" className="w-full h-96 rounded-lg shadow-lg"></div>;
// };

// export default MapComponent;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComponent = () => {
  const position = [29.9915, -98.0915]; // Approximate latitude/longitude for "2V2X+6M"

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
