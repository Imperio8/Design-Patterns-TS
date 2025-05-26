/**
 * The Command interface declares a method for executing a command.
 */
export interface Command {
  execute(): void;
  undo(): void;
}

/**
 * The Light class represents a smart light that can be turned on and off.
 */
export class Light {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} light is on`);
  }

  public off(): void {
    console.log(`${this.location} light is off`);
  }
}

/**
 * The Stereo class represents a stereo system that can be turned on, off,
 * and have its volume adjusted.
 */
export class Stereo {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} stereo is on`);
  }

  public off(): void {
    console.log(`${this.location} stereo is off`);
  }

  public setCD(): void {
    console.log(`${this.location} stereo is set for CD input`);
  }

  public setVolume(volume: number): void {
    console.log(`${this.location} stereo volume set to ${volume}`);
  }
}

/**
 * The CeilingFan class represents a ceiling fan that can be turned on, off,
 * and have its speed adjusted.
 */
export class CeilingFan {
  private location: string;
  private speed: number = 0;

  constructor(location: string) {
    this.location = location;
  }

  public high(): void {
    this.speed = 3;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.speed = 2;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.speed = 1;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.speed = 0;
    console.log(`${this.location} ceiling fan is off`);
  }

  public getSpeed(): number {
    return this.speed;
  }
} 