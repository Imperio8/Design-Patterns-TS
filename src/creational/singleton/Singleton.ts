/**
 * Singleton class for managing application configuration.
 * Ensures only one instance of the configuration exists.
 */
export class ConfigurationManager {
  private static instance: ConfigurationManager;
  private settings: Record<string, any> = {};
  
  // Private constructor to prevent direct instantiation
  private constructor() {
    // Simulate loading configuration from a file or environment
    this.settings = {
      appName: "MyApp",
      version: "1.0.0",
      apiUrl: "https://api.example.com",
    };
  }
  
  /**
   * Static method to get the singleton instance.
   * If the instance doesn't exist, it creates one.
   */
  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }
  
  /**
   * Get a configuration value by key.
   * @param key - The configuration key.
   * @returns The configuration value.
   */
  public getSetting(key: string): any {
    return this.settings[key];
  }
}