import { Vehicle } from "./Vehicle";

/**
 * Factory interface for creating vehicles.
 */
export interface VehicleFactory {
  createVehicle(model: string, color: string, year: number, fuelType: string): Vehicle;
}