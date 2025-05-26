/**
 * Example usage of the Command Pattern.
 * 
 * The Command Pattern is a behavioral design pattern that turns a request into a
 * stand-alone object that contains all information about the request. This transformation
 * lets you parameterize methods with different requests, delay or queue a request's
 * execution, and support undoable operations.
 * 
 * Key benefits:
 * - Decouples the object that invokes the operation from the one that knows how to perform it
 * - Allows for parameterization of clients with different requests
 * - Enables queuing of requests
 * - Supports undoable operations
 * - Provides a way to log operations
 * 
 * Common use cases:
 * - GUI buttons and menu items
 * - Macro recording
 * - Multi-level undo/redo
 * - Job queues
 * - Remote procedure calls
 * 
 * In this example, we demonstrate:
 * - A remote control that can control various home devices
 * - Commands that encapsulate device operations
 * - The ability to undo operations
 * - A flexible and extensible command system
 */
import { Light, Stereo, CeilingFan } from "./Command";
import { LightOnCommand, LightOffCommand } from "./Commands";
import { StereoOnWithCDCommand, StereoOffCommand } from "./Commands";
import { CeilingFanHighCommand, CeilingFanOffCommand } from "./Commands";
import { RemoteControl } from "./RemoteControl";

export function commandExample() {
  // Create the remote control
  const remoteControl = new RemoteControl();

  // Create the devices
  const livingRoomLight = new Light("Living Room");
  const kitchenLight = new Light("Kitchen");
  const livingRoomStereo = new Stereo("Living Room");
  const ceilingFan = new CeilingFan("Living Room");

  // Create the commands
  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);
  const stereoOnWithCD = new StereoOnWithCDCommand(livingRoomStereo);
  const stereoOff = new StereoOffCommand(livingRoomStereo);
  const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
  const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

  // Configure the remote control
  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
  remoteControl.setCommand(2, stereoOnWithCD, stereoOff);
  remoteControl.setCommand(3, ceilingFanHigh, ceilingFanOff);

  // Use the remote control
  console.log(remoteControl.toString());

  console.log("--- Pushing Living Room Light On ---");
  remoteControl.onButtonWasPushed(0);
  console.log("--- Pushing Living Room Light Off ---");
  remoteControl.offButtonWasPushed(0);

  console.log("\n--- Pushing Kitchen Light On ---");
  remoteControl.onButtonWasPushed(1);
  console.log("--- Pushing Kitchen Light Off ---");
  remoteControl.offButtonWasPushed(1);

  console.log("\n--- Pushing Stereo On ---");
  remoteControl.onButtonWasPushed(2);
  console.log("--- Pushing Stereo Off ---");
  remoteControl.offButtonWasPushed(2);

  console.log("\n--- Pushing Ceiling Fan High ---");
  remoteControl.onButtonWasPushed(3);
  console.log("--- Pushing Ceiling Fan Off ---");
  remoteControl.offButtonWasPushed(3);

  console.log("\n--- Testing Undo ---");
  remoteControl.undoButtonWasPushed();
} 