export interface Car {
  readonly id: string;
  readonly name: string;
  readonly consumption: Consumption;
}

// Type aliases to make keeping track of units sane

/**
 * kilometers/hour
 */
export type Velocity = number;

/**
 * hours
 */
export type Duration = number;

/**
 * kilometers
 */
export type Distance = number;

/**
 * liters
 */
export type FuelUnit = number;

/**
 * liters / 100 kilometers
 */
export type Consumption = number;
