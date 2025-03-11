import { Computer } from "./Computer";

/**
 * Builder interface for constructing a computer.
 */
export interface ComputerBuilder {
  setCPU(cpu: string): void;
  setGPU(gpu: string): void;
  setRAM(ram: string): void;
  setStorage(storage: string): void;
  getResult(): Computer;
}