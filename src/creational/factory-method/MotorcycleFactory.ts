import { VehicleFactory } from "./VehicleFactory";
import { Motorcycle } from "./Motorcycle";
import { Vehicle } from "./Vehicle";

/**
 * Concrete factory: MotorcycleFactory
 */
export class MotorcycleFactory implements VehicleFactory {
  public createVehicle(
    model: string,
    color: string,
    year: number,
    fuelType: string
  ): Vehicle {
    return new Motorcycle(model, color, year, fuelType);
  }
}