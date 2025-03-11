import { CarFactory } from "./CarFactory";
import { TruckFactory } from "./TruckFactory";
import { MotorcycleFactory } from "./MotorcycleFactory";

/**
 * Example usage of the Factory Method pattern.
 * Demonstrates creating different vehicles with attributes using their respective factories.
 */
export function factoryMethodExample() {
  // Create a car using the CarFactory
  const carFactory = new CarFactory();
  const car = carFactory.createVehicle("Tesla Model S", "Red", 2023, "Electric");
  car.drive();
  car.displayDetails();
  
  // Create a truck using the TruckFactory
  const truckFactory = new TruckFactory();
  const truck = truckFactory.createVehicle("Ford F-150", "Blue", 2022, "Diesel");
  truck.drive();
  truck.displayDetails();
  
  // Create a motorcycle using the MotorcycleFactory
  const motorcycleFactory = new MotorcycleFactory();
  const motorcycle = motorcycleFactory.createVehicle("Harley Davidson", "Black", 2021, "Petrol");
  motorcycle.drive();
  motorcycle.displayDetails();
}