/**
 * Example usage of the Adapter Pattern.
 * 
 * The Adapter Pattern is a structural design pattern that allows objects with incompatible
 * interfaces to collaborate. It acts as a wrapper between two objects, catching calls for
 * one object and transforming them to format and interface recognizable by the second object.
 * 
 * Key benefits:
 * - Enables collaboration between incompatible interfaces
 * - Follows the Single Responsibility Principle
 * - Follows the Open/Closed Principle
 * - Increases code reusability
 * 
 * Common use cases:
 * - When you want to use an existing class, but its interface isn't compatible with your code
 * - When you want to create a reusable class that cooperates with unrelated classes
 * - When you need to use several existing subclasses, but it's impractical to adapt their
 *   interface by subclassing each one
 * 
 * In this example, we demonstrate:
 * - A MetricSystem class with its own interface
 * - An ImperialSystem interface that clients expect to work with
 * - A MetricToImperialAdapter that converts between the two systems
 * - How the adapter makes the metric system compatible with code expecting imperial units
 */
import { MetricSystem } from "./MetricSystem";
import { MetricToImperialAdapter } from "./MetricToImperialAdapter";

/**
 * Example usage of the Adapter Pattern.
 * Demonstrates converting metric units to imperial units.
 */
export function adapterExample() {
  // Create an instance of the metric system
  const metricSystem = new MetricSystem();
  
  // Create an adapter to make the metric system compatible with the imperial system
  const adapter = new MetricToImperialAdapter(metricSystem);
  
  // Display distances in imperial units using the adapter
  console.log(adapter.displayInFeet(328.084)); // 100 meters
  console.log(adapter.displayInMiles(10)); // 16.0934 kilometers
}