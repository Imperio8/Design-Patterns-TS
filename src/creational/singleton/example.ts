/**
 * Example usage of the Singleton Pattern.
 * 
 * The Singleton Pattern is a creational design pattern that ensures a class has only one instance
 * and provides a global point of access to it.
 * 
 * Key benefits:
 * - Guarantees that a class has only one instance
 * - Provides a global access point to that instance
 * - Controls access to shared resources
 * - Useful for managing global state or configuration
 * 
 * Common use cases:
 * - Configuration management
 * - Database connections
 * - Logging
 * - Caching
 * - Thread pools
 * 
 * In this example, we demonstrate a ConfigurationManager that:
 * - Maintains a single instance of application settings
 * - Provides global access to configuration values
 * - Ensures all parts of the application use the same configuration
 */
import { ConfigurationManager } from "./Singleton";

/**
 * Example usage of the Singleton pattern.
 * Demonstrates how the same instance is reused across the application.
 */
export function singletonExample() {
  const config1 = ConfigurationManager.getInstance();
  const config2 = ConfigurationManager.getInstance();
  
  console.log("App Name:", config1.getSetting("appName"));
  console.log("API URL:", config2.getSetting("apiUrl"));
  
  // Check if both instances are the same
  if (config1 === config2) {
    console.log("Both configurations are the same instance.");
  } else {
    console.log("Error: Different instances detected.");
  }
}