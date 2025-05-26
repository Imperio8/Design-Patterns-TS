import { Device } from "./Device";

/**
 * Concrete Device: TV
 */
export class TV implements Device {
  private on: boolean = false;
  
  public isOn() {
    return this.on;
  }
  
  public powerOn() {
    this.on = true;
    console.log("TV is powered on.");
  }
  
  public powerOff() {
    this.on = false;
    console.log("TV is powered off.");
  }
  
  public setVolume(percent: number) {
    console.log(`TV volume set to ${percent}%.`);
  }
}