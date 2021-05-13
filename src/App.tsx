import React, { useCallback, useMemo, useState } from 'react';
import { INITIAL_FUEL_MULTIPLIER, INITIAL_CARS, INITIAL_V1, INITIAL_V2, INITIAL_D } from './constants';
import { Car } from './types';
import useTripData from './hooks/useTripData';
import Summary from './Components/Summary';
import TripDataInputs from './Components/TripDataInputs';
import Garage from './Components/Garage';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [v1, setV1] = useState(INITIAL_V1);
  const [v2, setV2] = useState(INITIAL_V2);

  const [d, setD] = useState(INITIAL_D);

  const [fuelMultiplier, setFuelMultiplier] = useState(INITIAL_FUEL_MULTIPLIER);
  const [cars, setCars] = useState<readonly Car[]>(INITIAL_CARS);
  const [selectedCarId, setSelectedCarId] = useState<string | null>(INITIAL_CARS[0]?.id ?? null);
  const selectedCar = useMemo(() => cars.find((it) => it.id === selectedCarId) ?? null, [cars, selectedCarId]);

  const tripData1 = useTripData(v1, d, selectedCar?.consumption ?? null, fuelMultiplier);
  const tripData2 = useTripData(v2, d, selectedCar?.consumption ?? null, fuelMultiplier);

  const onAddCar = useCallback(() => setCars([...cars, { id: uuidv4(), name: '', consumption: 0 }]), [cars]);
  const onDeleteCar = useCallback((id: string) => setCars(cars.filter((it) => it.id !== id)), [cars]);
  const onModifyCar = useCallback((car: Car) => setCars(cars.map((it) => (it.id === car.id ? car : it))), [cars]);

  return (
    <div className="mt-6 flex flex-col items-stretch md:items-center xl:flex-row xl:items-start justify-center">
      <div className="flex-col inline-flex items-stretch xl:flex-row xl:items-start">
        <div className="raised bg-pink m-3 p-4 flex flex-col md:w-108">
          <h1 className="text-center text-3xl my-8">Trip Calculator</h1>
          <TripDataInputs
            d={d}
            onChangeD={setD}
            v1={v1}
            v2={v2}
            onV1Change={setV1}
            onV2Change={setV2}
            fuelMultiplier={fuelMultiplier}
            onChangeFuelMultiplier={setFuelMultiplier}
          />

          <span className="font-bold mb-4">
            {selectedCar
              ? `Selected car: ${selectedCar.name.trim().length ? selectedCar.name : 'Unnamed'}`
              : 'No car selected'}
          </span>

          <Summary data1={tripData1} data2={tripData2} />
        </div>

        <div className="raised bg-pink m-3 p-4 md:w-108">
          <Garage
            cars={cars}
            onAddCar={onAddCar}
            onDeleteCar={onDeleteCar}
            onModifyCar={onModifyCar}
            onSelectCar={setSelectedCarId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
