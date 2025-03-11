import { Checkbox } from "./Checkbox";

/**
 * Concrete product: macOS checkbox.
 */
export class MacOSCheckbox implements Checkbox {
  public render(): void {
    console.log("Rendering a macOS-style checkbox.");
  }
  
  public onCheck(): void {
    console.log("macOS checkbox checked!");
  }
}