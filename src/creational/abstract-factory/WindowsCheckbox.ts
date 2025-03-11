import { Checkbox } from "./Checkbox";

/**
 * Concrete product: Windows checkbox.
 */
export class WindowsCheckbox implements Checkbox {
  public render(): void {
    console.log("Rendering a Windows-style checkbox.");
  }
  
  public onCheck(): void {
    console.log("Windows checkbox checked!");
  }
}