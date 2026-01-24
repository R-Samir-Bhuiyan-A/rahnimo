'use client';

import { ReactNode } from 'react';
import { GeoProvider } from '../context/GeoContext';

export default function GeoLocationProvider({ children }: { children: ReactNode }) {
  return (
    <GeoProvider>
      {children}
    </GeoProvider>
  );
}