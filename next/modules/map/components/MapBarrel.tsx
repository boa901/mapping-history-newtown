'use client';

import React, { useEffect, useState } from 'react';

export default function MapBarrel(): React.ReactNode {
  const [Client, setClient] = useState<React.FunctionComponent>();

  useEffect(() => {
    const loadComponent = async () => {
      if (typeof global.window !== 'undefined') {
        const newClient = (await import('./Map')).default;
        setClient(() => newClient);
      }
    };
    loadComponent();
  }, []);

  return typeof global.window !== 'undefined' && Client ? (
    <Client />
  ) : null;
}
