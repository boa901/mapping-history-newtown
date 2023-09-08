'use client';

import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {

  const bounds = new L.LatLngBounds(
    new L.LatLng(38.40087424, -78.91065653),
    new L.LatLng(38.49355771, -78.82668815),
  );

  return (
    <MapContainer
      center={[38.447215975, -78.86867234]}
      zoom={14}
      maxBounds={bounds}
      maxZoom={20}
      minZoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <TileLayer
        url="http://localhost:3000/tiles/{z}/{x}/{y}.png"
        maxZoom={20}
      />
    </MapContainer>
  );
};
