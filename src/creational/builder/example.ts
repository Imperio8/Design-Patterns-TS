/**
 * Example usage of the Builder Pattern.
 * 
 * The Builder Pattern is a creational design pattern that lets you construct complex objects
 * step by step. It allows you to produce different types and representations of an object
 * using the same construction process.
 * 
 * Key benefits:
 * - Separates object construction from its representation
 * - Provides fine control over the construction process
 * - Allows for different representations of the same construction process
 * - Encapsulates complex construction logic
 * 
 * Common use cases:
 * - When an object has a complex construction process
 * - When you need to create different representations of the same object
 * - When you want to create an object step by step
 * - When you need to ensure immutability of the final object
 * 
 * In this example, we demonstrate:
 * - A ComputerBuilder interface that defines the construction steps
 * - Concrete builders (GamingComputerBuilder, OfficeComputerBuilder) for different computer types
 * - A Director class that orchestrates the construction process
 * - The ability to create different computer configurations using the same construction process
 */
import { GamingComputerBuilder } from "./GamingComputerBuilder";
import { OfficeComputerBuilder } from "./OfficeComputerBuilder";
import { ComputerDirector } from "./ComputerDirector";

/**
 * Example usage of the Builder pattern.
 * Demonstrates constructing different types of computers.
 */
export function builderExample() {
  // Build a gaming computer
  const gamingBuilder = new GamingComputerBuilder();
  const gamingDirector = new ComputerDirector(gamingBuilder);
  
  gamingDirector.constructGamingComputer();
  const gamingComputer = gamingBuilder.getResult();
  
  console.log("Gaming Computer:");
  gamingComputer.displayConfiguration();
  
  // Build an office computer
  const officeBuilder = new OfficeComputerBuilder();
  const officeDirector = new ComputerDirector(officeBuilder);
  
  officeDirector.constructOfficeComputer();
  const officeComputer = officeBuilder.getResult();
  
  console.log("\nOffice Computer:");
  officeComputer.displayConfiguration();
}