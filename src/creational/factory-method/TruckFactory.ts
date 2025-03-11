import { VehicleFactory } from "./VehicleFactory";
import { Truck } from "./Truck";
import { Vehicle } from "./Vehicle";

/**
 * Concrete factory: TruckFactory
 */
export class TruckFactory implements VehicleFactory {
  public createVehicle(
    model: string,
    color: string,
    year: number,
    fuelType: string
  ): Vehicle {
    return new Truck(model, color, year, fuelType);
  }
}