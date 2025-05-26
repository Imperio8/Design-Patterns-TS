import { RemoteControl } from "./RemoteControl";
import { Device } from "./Device";

/**
 * Advanced Remote Control (Refined Abstraction)
 * Extends the basic remote control with additional features.
 */
export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }
  
  /**
   * Mutes the device.
   */
  public mute() {
    this.device.setVolume(0);
    console.log("Device is muted.");
  }
}