'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Button, RangeSlider } from 'flowbite-react';

import Drawer from '@/modules/common/components/Drawer';
import HouseholdView from '@/modules/common/components/HouseholdView';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<{
    street_no: string,
    street_name: string,
  } | null>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedHouse) {
      setDrawerOpen(false);
    }
  }, [selectedHouse]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex flex-row m-2">
        <Drawer open={drawerOpen}>
          <HouseholdView house={selectedHouse} />
        </Drawer>
        <div className="flex-grow">
          <div className="w-full h-full flex flex-col">
            <div className="flex-grow">
              <Map select={setSelectedHouse} />
            </div>
            <div className="flex flex-row justify-between items-center bg-gray-200/50 border p-2">
              <div>
                {selectedHouse ? (
                  <>
                    {drawerOpen ? (
                      <Button onClick={() => setDrawerOpen(false)}>Hide Residents</Button>
                    ) : (
                      <Button onClick={() => setDrawerOpen(true)}>Show Residents</Button>
                    )}
                  </>
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
        </div>
      </div>
    </div>
  );
}
