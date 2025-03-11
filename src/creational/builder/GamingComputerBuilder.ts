import { ComputerBuilder } from "./ComputerBuilder";
import { Computer } from "./Computer";

/**
 * Concrete builder: Gaming computer builder.
 */
export class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;
  
  constructor() {
    this.computer = new Computer();
  }
  
  public setCPU(cpu: string): void {
    this.computer.cpu = cpu;
  }
  
  public setGPU(gpu: string): void {
    this.computer.gpu = gpu;
  }
  
  public setRAM(ram: string): void {
    this.computer.ram = ram;
  }
  
  public setStorage(storage: string): void {
    this.computer.storage = storage;
  }
  
  public getResult(): Computer {
    return this.computer;
  }
}