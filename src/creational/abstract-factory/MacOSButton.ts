import { Button } from "./Button";

/**
 * Concrete product: macOS button.
 */
export class MacOSButton implements Button {
  public render(): void {
    console.log("Rendering a macOS-style button.");
  }
  
  public onClick(): void {
    console.log("macOS button clicked!");
  }
}