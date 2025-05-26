import { Command, Light, Stereo, CeilingFan } from "./Command";

/**
 * LightOnCommand represents a command to turn a light on.
 */
export class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

/**
 * LightOffCommand represents a command to turn a light off.
 */
export class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

/**
 * StereoOnWithCDCommand represents a command to turn on a stereo and set it to CD mode.
 */
export class StereoOnWithCDCommand implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  public undo(): void {
    this.stereo.off();
  }
}

/**
 * StereoOffCommand represents a command to turn off a stereo.
 */
export class StereoOffCommand implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

/**
 * CeilingFanHighCommand represents a command to set a ceiling fan to high speed.
 */
export class CeilingFanHighCommand implements Command {
  private ceilingFan: CeilingFan;
  private prevSpeed: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case 3:
        this.ceilingFan.high();
        break;
      case 2:
        this.ceilingFan.medium();
        break;
      case 1:
        this.ceilingFan.low();
        break;
      default:
        this.ceilingFan.off();
        break;
    }
  }
}

/**
 * CeilingFanOffCommand represents a command to turn off a ceiling fan.
 */
export class CeilingFanOffCommand implements Command {
  private ceilingFan: CeilingFan;
  private prevSpeed: number = 0;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case 3:
        this.ceilingFan.high();
        break;
      case 2:
        this.ceilingFan.medium();
        break;
      case 1:
        this.ceilingFan.low();
        break;
      default:
        this.ceilingFan.off();
        break;
    }
  }
} 