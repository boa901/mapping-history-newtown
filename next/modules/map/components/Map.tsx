'use client';

import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        url="http://localhost:3000/tiles/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
