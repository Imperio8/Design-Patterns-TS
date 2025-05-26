/**
 * Imperial System Interface
 * Operates in feet and miles.
 */
export interface ImperialSystem {
  /**
   * Displays a distance in feet.
   * @param feet - The distance in feet.
   * @returns A string representation.
   */
  displayInFeet(feet: number): string;
  
  /**
   * Displays a distance in miles.
   * @param miles - The distance in miles.
   * @returns A string representation.
   */
  displayInMiles(miles: number): string;
}