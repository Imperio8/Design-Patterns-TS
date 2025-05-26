/**
 * Example usage of the Abstract Factory Pattern.
 * 
 * The Abstract Factory Pattern is a creational design pattern that provides an interface
 * for creating families of related or dependent objects without specifying their concrete classes.
 * 
 * Key benefits:
 * - Ensures compatibility between related objects
 * - Encapsulates object creation
 * - Supports the Open/Closed Principle
 * - Provides a way to create families of related objects
 * 
 * Common use cases:
 * - When a system should be independent of how its products are created
 * - When a system should be configured with one of multiple families of products
 * - When a family of related product objects is designed to be used together
 * - When you want to provide a class library of products, and you want to reveal just their interfaces
 * 
 * In this example, we demonstrate:
 * - A UIFactory interface that defines methods for creating UI components
 * - Concrete factories (WindowsUIFactory, MacOSUIFactory) that create platform-specific components
 * - Each factory creates a family of related UI components (buttons, checkboxes)
 * - The client code works with abstract interfaces, not concrete implementations
 */
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