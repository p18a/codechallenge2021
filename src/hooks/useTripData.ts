import { useMemo } from 'react';
import { Consumption, Distance, Duration, FuelUnit, Velocity } from '../types';

export interface TripData {
  readonly t: Duration;
  readonly fuelUsed: FuelUnit;
}

function tripDuration(v: Velocity, d: Distance): Duration {
  return d / v;
}

function fuelUsed(v: Velocity, d: Distance, c: Consumption, multiplier: number): FuelUnit {
  return ((c * Math.pow(multiplier, v - 1)) / 100) * d;
}

export default function useTripData(
  v: Velocity | null,
  d: Distance | null,
  c: Consumption | null,
  multiplier: number,
): TripData {
  return useMemo(
    () => ({
      t: v && d ? tripDuration(v, d) : NaN,
      fuelUsed: v && d && c && multiplier ? fuelUsed(v, d, c, multiplier) : NaN,
    }),
    [v, d, c, multiplier],
  );
}
