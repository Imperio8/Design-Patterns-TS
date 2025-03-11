/**
 * Interface for all vehicles.
 */
export interface Vehicle {
  model: string;
  color: string;
  year: number;
  fuelType: string;
  drive(): void;
  displayDetails(): void;
}