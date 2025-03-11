import { Vehicle } from "./Vehicle";

/**
 * Concrete product: Motorcycle
 */
export class Motorcycle implements Vehicle {
  constructor(
    public model: string,
    public color: string,
    public year: number,
    public fuelType: string
  ) {}
  
  public drive(): void {
    console.log(`Riding the ${this.color} ${this.model} motorcycle...`);
  }
  
  public displayDetails(): void {
    console.log(`Motorcycle Details:
      Model: ${this.model}
      Color: ${this.color}
      Year: ${this.year}
      Fuel Type: ${this.fuelType}`);
  }
}