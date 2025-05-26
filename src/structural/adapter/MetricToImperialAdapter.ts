import { MetricSystem } from "./MetricSystem";
import { ImperialSystem } from "./ImperialSystem";

/**
 * Adapter Class
 * Converts metric units (meters, kilometers) to imperial units (feet, miles).
 */
export class MetricToImperialAdapter implements ImperialSystem {
  private metricSystem: MetricSystem;
  
  constructor(metricSystem: MetricSystem) {
    this.metricSystem = metricSystem;
  }
  
  /**
   * Converts meters to feet and displays the result.
   * @param feet - The distance in feet.
   * @returns A string representation.
   */
  public displayInFeet(feet: number): string {
    // 1 meter = 3.28084 feet
    const meters = feet / 3.28084;
    return this.metricSystem.displayInMeters(meters);
  }
  
  /**
   * Converts miles to kilometers and displays the result.
   * @param miles - The distance in miles.
   * @returns A string representation.
   */
  public displayInMiles(miles: number): string {
    // 1 mile = 1.60934 kilometers
    const kilometers = miles * 1.60934;
    return this.metricSystem.displayInKilometers(kilometers);
  }
}