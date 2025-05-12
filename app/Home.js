'use client';

import CrisisMap from './CrisisMap.js';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Crisis Map Dashboard</h1>
      <CrisisMap />
    </main>
  );
}