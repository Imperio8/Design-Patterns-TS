import { Vehicle } from "./Vehicle";

/**
 * Concrete product: Car
 */
export class Car implements Vehicle {
  constructor(
    public model: string,
    public color: string,
    public year: number,
    public fuelType: string
  ) {}
  
  public drive(): void {
    console.log(`Driving the ${this.color} ${this.model} car...`);
  }
  
  public displayDetails(): void {
    console.log(`Car Details:
      Model: ${this.model}
      Color: ${this.color}
      Year: ${this.year}
      Fuel Type: ${this.fuelType}`);
  }
}