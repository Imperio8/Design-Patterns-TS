/**
 * Device Interface (Implementation)
 * Defines the operations that all devices must support.
 */
export interface Device {
  /**
   * Checks if device is on.
   */
  isOn(): boolean;
  
  /**
   * Turns the device on.
   */
  powerOn(): void;
  
  /**
   * Turns the device off.
   */
  powerOff(): void;
  
  /**
   * Sets the volume of the device.
   * @param percent - The volume level as a percentage.
   */
  setVolume(percent: number): void;
}