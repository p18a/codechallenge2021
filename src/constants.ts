import { v4 as uuidv4 } from 'uuid';
import { Car, Velocity } from './types';

export const INITIAL_V1 = 100;
export const INITIAL_V2 = 230;
export const INITIAL_D = 430;
export const INITIAL_FUEL_MULTIPLIER = 1.009;

export const INITIAL_CARS: readonly Car[] = [
  {
    id: uuidv4(),
    name: 'Car A',
    consumption: 3,
  },
  {
    id: uuidv4(),
    name: 'Car B',
    consumption: 3.5,
  },
  {
    id: uuidv4(),
    name: 'Car C',
    consumption: 4,
  },
];

export const MAX_V: Velocity = 300000;
