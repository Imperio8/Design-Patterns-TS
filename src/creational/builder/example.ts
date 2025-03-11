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