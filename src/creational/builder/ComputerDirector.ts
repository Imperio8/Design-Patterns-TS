import { ComputerBuilder } from "./ComputerBuilder";

/**
 * Director class that constructs a computer using a builder.
 */
export class ComputerDirector {
  private builder: ComputerBuilder;
  
  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }
  
  /**
   * Constructs a gaming computer.
   */
  public constructGamingComputer(): void {
    this.builder.setCPU("Intel Core i9");
    this.builder.setGPU("NVIDIA RTX 3090");
    this.builder.setRAM("32GB DDR5");
    this.builder.setStorage("2TB NVMe SSD");
  }
  
  /**
   * Constructs an office computer.
   */
  public constructOfficeComputer(): void {
    this.builder.setCPU("Intel Core i5");
    this.builder.setGPU("Integrated Graphics");
    this.builder.setRAM("16GB DDR4");
    this.builder.setStorage("512GB SSD");
  }
}