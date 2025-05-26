/**
 * The Singleton class ensures that only one instance of the class exists
 * and provides a global point of access to it.
 * 
 * Implementation details:
 * - Private constructor prevents direct instantiation
 * - Static instance variable holds the single instance
 * - getInstance() method provides controlled access to the instance
 * - Lazy initialization creates the instance only when first needed
 * 
 * Thread safety considerations:
 * - This implementation is not thread-safe
 * - For thread safety, consider using:
 *   - Synchronized methods
 *   - Double-checked locking
 *   - Initialization-on-demand holder idiom
 */
export class ConfigurationManager {
  private static instance: ConfigurationManager;
  private settings: Map<string, string>;
  
  // Private constructor to prevent direct instantiation
  private constructor() {
    this.settings = new Map();
    this.settings.set("appName", "MyApp");
    this.settings.set("apiUrl", "https://api.example.com");
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
  public getSetting(key: string): string {
    return this.settings.get(key) || "";
  }
}