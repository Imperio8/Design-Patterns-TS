/**
 * Example usage of the Factory Method Pattern.
 * 
 * The Factory Method Pattern is a creational design pattern that provides an interface
 * for creating objects but lets subclasses decide which class to instantiate.
 * 
 * Key benefits:
 * - Encapsulates object creation logic
 * - Provides flexibility in creating different types of objects
 * - Follows the Open/Closed Principle
 * - Makes code more maintainable and testable
 * 
 * Common use cases:
 * - When a class can't anticipate the class of objects it must create
 * - When a class wants its subclasses to specify the objects it creates
 * - When you want to localize the knowledge of which class gets created
 * 
 * In this example, we demonstrate:
 * - A VehicleFactory interface that defines the factory method
 * - Concrete factories (CarFactory, TruckFactory, MotorcycleFactory) that create specific vehicles
 * - Each factory creates its own type of vehicle with specific attributes
 * - The client code works with the abstract Vehicle interface
 */
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