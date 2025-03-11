import { Vehicle } from "./Vehicle";

/**
 * Concrete product: Truck
 */
export class Truck implements Vehicle {
  constructor(
    public model: string,
    public color: string,
    public year: number,
    public fuelType: string
  ) {}
  
  public drive(): void {
    console.log(`Driving the ${this.color} ${this.model} truck...`);
  }
  
  public displayDetails(): void {
    console.log(`Truck Details:
      Model: ${this.model}
      Color: ${this.color}
      Year: ${this.year}
      Fuel Type: ${this.fuelType}`);
  }
}