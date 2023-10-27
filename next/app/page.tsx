import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/modules/map/components/Map'), { ssr: false });

export default function Home() {
  return (
    <Map />
  );
}
