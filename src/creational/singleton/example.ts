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