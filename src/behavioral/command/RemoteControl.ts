import { Command } from "./Command";

/**
 * RemoteControl represents a remote control that can execute commands.
 * It supports multiple slots for different commands and an undo button.
 */
export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command | null = null;

  constructor() {
    // Initialize all slots with a NoCommand
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed(): void {
    this.undoCommand?.undo();
  }

  public toString(): string {
    let stringBuff = "\n------ Remote Control -------\n";
    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff += `[slot ${i}] ${this.onCommands[i].constructor.name}    ${this.offCommands[i].constructor.name}\n`;
    }
    stringBuff += `[undo] ${this.undoCommand?.constructor.name}\n`;
    return stringBuff;
  }
}

/**
 * NoCommand represents a command that does nothing.
 * It's used as a default command for empty slots.
 */
class NoCommand implements Command {
  public execute(): void {}
  public undo(): void {}
} 