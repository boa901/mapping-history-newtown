'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button, RangeSlider } from 'flowbite-react';

import HouseholdView from '@/modules/common/components/HouseholdView';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<{
    street_no: string,
    street_name: string,
  } | null>();

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="w-full flex flex-col">
        <Map select={setSelectedHouse} />
        <div className="flex flex-row justify-between items-center p-2 bg-gray-200/50">
          <Button>Show Residents</Button>
          <div className="flex flex-row">
            <h1 className="mr-2">Opacity:</h1>
            <RangeSlider />
          </div>
        </div>
      </div>
      <div className="w-full">
        <HouseholdView house={selectedHouse} />
      </div>
    </div>
  );
}
