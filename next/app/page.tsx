'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import HouseholdView from '@/modules/common/components/HouseholdView';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<{street_no: string, street_name: string} | null>();

  return (
    <>
      <Map select={setSelectedHouse} />
      <HouseholdView house={selectedHouse} />
    </>
  );
}
