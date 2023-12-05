'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button, RangeSlider } from 'flowbite-react';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<{
    street_no: string,
    street_name: string,
  } | null>();

  return (
    <div className="w-full h-screen flex flex-col p-2">
      <div className="flex-grow">
        <Map select={setSelectedHouse} />
      </div>
      <div className="flex flex-row justify-between items-center p-2 bg-gray-200/50">
        <div>
          {selectedHouse ? (
            <Button>Show Residents</Button>
          ) : (
            <Button disabled>Show Residents</Button>
          )}
        </div>
        <div className="flex flex-row">
          <h1 className="mr-2">Opacity:</h1>
          <RangeSlider />
        </div>
      </div>
    </div>
  );
}
