import { VehicleFactory } from "./VehicleFactory";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";

/**
 * Concrete factory: CarFactory
 */
export class CarFactory implements VehicleFactory {
  public createVehicle(
    model: string,
    color: string,
    year: number,
    fuelType: string
  ): Vehicle {
    return new Car(model, color, year, fuelType);
  }
}