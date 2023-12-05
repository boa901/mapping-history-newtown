'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import HouseholdView from '@/modules/common/components/HouseholdView';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<{
    street_no: string,
    street_name: string,
  } | null>();

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="w-full">
        <Map select={setSelectedHouse} />
      </div>
      <div className="w-full">
        <HouseholdView house={selectedHouse} />
      </div>
    </div>
  );
}
