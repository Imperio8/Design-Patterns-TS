import { Device } from "./Device";

/**
 * Remote Control Abstraction
 * Defines the high-level operations for controlling a device.
 */
export class RemoteControl {
  protected device: Device;
  
  constructor(device: Device) {
    this.device = device;
  }
  
  /**
   * Toggles the power of the device.
   */
  public togglePower() {
    if (this.device.isOn()) {
      this.device.powerOff();
    } else {
      this.device.powerOn();
    }
  }
  
  /**
   * Sets the volume of the device.
   * @param percent - The volume level as a percentage.
   */
  public setVolume(percent: number) {
    this.device.setVolume(percent);
  }
}