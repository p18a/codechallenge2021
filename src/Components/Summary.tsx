import React from 'react';
import useComparedTrips from '../hooks/useComparedTrips';
import { TripData } from '../hooks/useTripData';
import { formatDuration, formatFuel } from '../utils';

interface SummaryProps {
  data1: TripData;
  data2: TripData;
}

export default function Summary({ data1, data2 }: SummaryProps) {
  const result = useComparedTrips(data1, data2);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl my-4">Summary</h2>
      <h3 className="font-bold mb-1">Velocity 1</h3>
      <ul>
        <li className="mb-2">
          <span className="font-mono">{formatDuration(data1.t)}</span>
        </li>
        <li className="mb-2">
          <span className="font-mono">{formatFuel(data1.fuelUsed)}</span>
        </li>
      </ul>

      <h3 className="font-bold mb-1">Velocity 2</h3>
      <ul>
        <li className="mb-2">
          <span className="font-mono">{formatDuration(data2.t)}</span>
        </li>
        <li className="mb-2">
          <span className="font-mono">{formatFuel(data2.fuelUsed)}</span>
        </li>
      </ul>

      <dl>
        <dt className="font-bold mb-1">Durations compared</dt>
        <dd className="mb-2 font-mono">{result.duration}</dd>

        <dt className="font-bold mb-1">Fuel consumptions compared</dt>
        <dd className="mb-2 font-mono">{result.consumption}</dd>
      </dl>
    </div>
  );
}
