import React from 'react';
import { Car } from '../types';
import { formatNumber } from '../utils';

interface GarageProps {
  readonly cars: readonly Car[];
  readonly onAddCar: () => void;
  readonly onDeleteCar: (id: string) => void;
  readonly onModifyCar: (car: Car) => void;
  readonly onSelectCar: (id: string) => void;
}

export default function Garage({ cars, onAddCar, onDeleteCar, onModifyCar, onSelectCar }: GarageProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl my-8">Garage</h1>
      <ul>
        {cars.map((it) => (
          <li key={it.id} className="car-row">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-1 flex-col sm:mr-2">
                <label htmlFor={`${it.id}-name`} className="label">
                  Name
                </label>
                <input
                  id={`${it.id}-name`}
                  className="input mb-4"
                  type="text"
                  value={it.name ?? ''}
                  onChange={(e) => onModifyCar({ ...cars.find((car) => it.id === car.id)!, name: e.target.value })}
                />
              </div>

              <div className="flex flex-1 flex-col sm:ml-2">
                <label htmlFor={`${it.id}-fuel`} className="label">
                  Fuel consumption
                </label>
                <input
                  id={`${it.id}-fuel`}
                  className="input mb-4"
                  type="number"
                  value={formatNumber(it.consumption)}
                  step={0.1}
                  onChange={(e) =>
                    onModifyCar({ ...cars.find((car) => it.id === car.id)!, consumption: parseFloat(e.target.value) })
                  }
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button type="button" className="button mr-4" onClick={() => onSelectCar(it.id)}>
                Select
              </button>
              <button type="button" className="button" onClick={() => onDeleteCar(it.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button type="button" className="button block" onClick={onAddCar}>
        Add car
      </button>
    </div>
  );
}
