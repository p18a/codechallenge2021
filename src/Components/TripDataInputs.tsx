import React from 'react';
import { MAX_V } from '../constants';
import { formatNumber } from '../utils';

interface TripDataInputProps {
  readonly d: number;
  readonly onChangeD: (d: number) => void;

  readonly v1: number;
  readonly v2: number;
  readonly onV1Change: (v1: number) => void;
  readonly onV2Change: (v2: number) => void;

  readonly fuelMultiplier: number;
  readonly onChangeFuelMultiplier: (multiplier: number) => void;
}

export default function TripDataInputs({
  d,
  onChangeD,
  v1,
  v2,
  onV1Change,
  onV2Change,
  fuelMultiplier,
  onChangeFuelMultiplier,
}: TripDataInputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label className="label" htmlFor="fuel-multiplier">
          Fuel consumption multiplier
        </label>
        <input
          id="fuel-multiplier"
          className="input mb-4"
          type="number"
          min={0}
          step={0.001}
          value={formatNumber(fuelMultiplier)}
          onChange={(e) => onChangeFuelMultiplier(parseFloat(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label className="label" htmlFor="trip-distance">
          Trip distance (km)
        </label>
        <input
          id="trip-distance"
          className="input mb-4"
          type="number"
          min={0}
          value={formatNumber(d)}
          onChange={(e) => onChangeD(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col flex-1 sm:mr-2">
          <label className="label" htmlFor="velocity-1">
            Velocity 1 (km/h)
          </label>
          <input
            id="velocity-1"
            className="input mb-4"
            type="number"
            max={MAX_V}
            value={formatNumber(v1)}
            onChange={(e) => onV1Change(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col flex-1 sm:ml-2">
          <label className="label" htmlFor="velocity-2">
            Velocity 2 (km/h)
          </label>
          <input
            id="velocity-2"
            className="input mb-4"
            type="number"
            max={MAX_V}
            value={formatNumber(v2)}
            onChange={(e) => onV2Change(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
