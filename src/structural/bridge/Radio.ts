import { Device } from "./Device";

/**
 * Concrete Device: Radio
 */
export class Radio implements Device {
  private on: boolean = false;
  
  public isOn() {
    return this.on;
  }
  
  public powerOn() {
    this.on = true;
    console.log("Radio is powered on.");
  }
  
  public powerOff() {
    this.on = false;
    console.log("Radio is powered off.");
  }
  
  public setVolume(percent: number) {
    console.log(`Radio volume set to ${percent}%.`);
  }
}