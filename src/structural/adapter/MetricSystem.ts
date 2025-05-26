/**
 * Metric System (Incompatible Interface)
 * Operates in meters and kilometers.
 */
export class MetricSystem {
  /**
   * Displays a distance in meters.
   * @param meters - The distance in meters.
   * @returns A string representation.
   */
  public displayInMeters(meters: number): string {
    return `${meters} meters`;
  }
  
  /**
   * Displays a distance in kilometers.
   * @param kilometers - The distance in kilometers.
   * @returns A string representation.
   */
  public displayInKilometers(kilometers: number): string {
    return `${kilometers} kilometers`;
  }
}