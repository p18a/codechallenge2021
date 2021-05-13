import { useMemo } from 'react';
import { formatDuration, formatFuel } from '../utils';
import { TripData } from './useTripData';

export interface ComparisonResult {
  duration: string;
  consumption: string;
}

function compareDuration(data1: TripData, data2: TripData): string {
  if (!data1.t || !data2.t) return 'Not enough data for comparison';

  if (data1.t === data2.t) return 'Durations are identical';

  return `Velocity ${data1.t < data2.t ? '1' : '2'} is faster by ${formatDuration(Math.abs(data1.t - data2.t))}`;
}

function compareConsumption(data1: TripData, data2: TripData): string {
  if (!data1.fuelUsed || !data2.fuelUsed) return 'Not enough data for comparison';

  if (data1.fuelUsed === data2.fuelUsed) return 'Fuel consumptions are identical';

  return `Velocity ${data1.fuelUsed < data2.fuelUsed ? '1' : '2'} uses ${formatFuel(
    Math.abs(data1.fuelUsed - data2.fuelUsed),
  )} less fuel`;
}

export default function useComparedTrips(data1: TripData, data2: TripData): ComparisonResult {
  return useMemo(
    () => ({
      duration: compareDuration(data1, data2),
      consumption: compareConsumption(data1, data2),
    }),
    [data1, data2],
  );
}
