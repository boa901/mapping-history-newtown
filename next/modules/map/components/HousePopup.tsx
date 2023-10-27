'use client';

import { Popup } from 'react-leaflet';

import HousePopupProps from '@/modules/map/types/HousePopupProps';

export default function HousePopup({ streetNumber, streetName }: HousePopupProps) {
  return (
    <Popup>{`${streetNumber} ${streetName}`}</Popup>
  );
};
