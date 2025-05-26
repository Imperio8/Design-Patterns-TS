/**
 * Example usage of the Observer Pattern.
 * 
 * The Observer Pattern is a behavioral design pattern that lets you define a subscription
 * mechanism to notify multiple objects about any events that happen to the object they're
 * observing.
 * 
 * Key benefits:
 * - Establishes a one-to-many dependency between objects
 * - Supports loose coupling between subject and observers
 * - Allows for dynamic subscription and unsubscription
 * - Enables broadcast communication
 * 
 * Common use cases:
 * - Event handling systems
 * - User interface updates
 * - Distributed event processing
 * - News feeds and social media
 * - Stock market updates
 * 
 * In this example, we demonstrate:
 * - A WeatherStation (Subject) that maintains weather data
 * - Multiple displays (Observers) that show different aspects of the weather
 * - Automatic updates to all displays when weather data changes
 * - The ability to add or remove displays dynamically
 */
import { WeatherStation } from "./WeatherStation";
import { CurrentConditionsDisplay } from "./Displays";
import { StatisticsDisplay } from "./Displays";
import { ForecastDisplay } from "./Displays";

export function observerExample() {
  // Create the weather station
  const weatherStation = new WeatherStation();

  // Create the displays
  const currentDisplay = new CurrentConditionsDisplay();
  const statisticsDisplay = new StatisticsDisplay();
  const forecastDisplay = new ForecastDisplay();

  // Register the displays as observers
  weatherStation.registerObserver(currentDisplay);
  weatherStation.registerObserver(statisticsDisplay);
  weatherStation.registerObserver(forecastDisplay);

  // Simulate new weather measurements
  console.log("First weather update:");
  weatherStation.setMeasurements(80, 65, 30.4);

  console.log("\nSecond weather update:");
  weatherStation.setMeasurements(82, 70, 29.2);

  console.log("\nThird weather update:");
  weatherStation.setMeasurements(78, 90, 29.2);

  // Remove one of the displays
  weatherStation.removeObserver(forecastDisplay);

  console.log("\nFourth weather update (without forecast display):");
  weatherStation.setMeasurements(81, 75, 30.1);
} 