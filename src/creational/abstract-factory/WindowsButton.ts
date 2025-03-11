import { Button } from "./Button";

/**
 * Concrete product: Windows button.
 */
export class WindowsButton implements Button {
  public render(): void {
    console.log("Rendering a Windows-style button.");
  }
  
  public onClick(): void {
    console.log("Windows button clicked!");
  }
}