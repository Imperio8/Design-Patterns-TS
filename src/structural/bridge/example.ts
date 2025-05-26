/**
 * Example usage of the Bridge Pattern.
 * 
 * The Bridge Pattern is a structural design pattern that lets you split a large class or
 * a set of closely related classes into two separate hierarchies—abstraction and
 * implementation—which can be developed independently of each other.
 * 
 * Key benefits:
 * - Separates abstraction from implementation
 * - Allows both abstraction and implementation to be extended independently
 * - Hides implementation details from client code
 * - Follows the Single Responsibility Principle
 * 
 * Common use cases:
 * - When you want to divide and organize a monolithic class that has several variants
 * - When you need to extend a class in several orthogonal (independent) dimensions
 * - When you need to switch implementations at runtime
 * - When you want to share an implementation among multiple objects
 * 
 * In this example, we demonstrate:
 * - A Device abstraction (TV, Radio) that defines the interface for devices
 * - A RemoteControl abstraction that defines how to control devices
 * - The ability to extend both hierarchies independently
 * - How different types of remotes can control different types of devices
 */
import { TV } from "./TV";
import { Radio } from "./Radio";
import { RemoteControl } from "./RemoteControl";
import { AdvancedRemoteControl } from "./AdvancedRemoteControl";

/**
 * Example usage of the Bridge Pattern.
 * Demonstrates controlling different devices with remote controls.
 */
export function bridgeExample() {
  // Create devices
  const tv = new TV();
  const radio = new Radio();
  
  // Create remote controls for the devices
  const tvRemote = new RemoteControl(tv);
  const radioRemote = new AdvancedRemoteControl(radio);
  
  // Use the remote controls
  console.log("Using TV Remote:");
  tvRemote.togglePower(); // TV is powered on.
  tvRemote.setVolume(50); // TV volume set to 50%.
  tvRemote.togglePower(); // TV is powered off.
  tvRemote.togglePower(); // TV is powered on again.
  
  console.log("\nUsing Radio Remote:");
  radioRemote.togglePower(); // Radio is powered on.
  radioRemote.setVolume(30); // Radio volume set to 30%.
  radioRemote.togglePower(); // Radio is powered off.
  radioRemote.togglePower(); // Radio is powered on again.
}