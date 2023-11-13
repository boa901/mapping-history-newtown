'use client';

import { useEffect, useState } from 'react';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import MarkerData from '@/modules/map/types/MarkerData';

export default function Map() {
  const [markers, setMarkers] = useState<MarkerData[] | null>();

  const bounds = new L.LatLngBounds(
    new L.LatLng(38.40087424, -78.91065653),
    new L.LatLng(38.49355771, -78.82668815),
  );

  useEffect(() => {
    const fetchMarkers = async () => {
      const { data: markerData } = await fetch('/api/houses', {
        method: 'GET',
      }).then((res) => res.json());

      setMarkers(markerData);
    };

    fetchMarkers();
  }, []);

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
        url="/tiles/{z}/{x}/{y}.png"
        maxZoom={20}
      />
      {markers?.map((marker) => (
        <Marker
          position={new L.LatLng(marker.latitude, marker.longitude)}
          key={`${marker.street_no} ${marker.street_name}`}
        />
      ))}
    </MapContainer>
  );
};
