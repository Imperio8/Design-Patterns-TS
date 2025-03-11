import { WindowsUIFactory } from "./WindowsUIFactory";
import { MacOSUIFactory } from "./MacOSUIFactory";
import {UIFactory} from "./UIFactory";

/**
 * Example usage of the Abstract Factory pattern.
 * Demonstrates creating UI components for different operating systems.
 */
export function abstractFactoryExample(os: string) {
  let factory: UIFactory;
  
  // Choose the factory based on the operating system
  if (os === "Windows") {
    factory = new WindowsUIFactory();
  } else if (os === "macOS") {
    factory = new MacOSUIFactory();
  } else {
    throw new Error("Unsupported operating system.");
  }
  
  // Create UI components using the factory
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  
  // Render and interact with the components
  button.render();
  button.onClick();
  
  checkbox.render();
  checkbox.onCheck();
}