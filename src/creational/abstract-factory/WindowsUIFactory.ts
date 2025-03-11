import { UIFactory } from "./UIFactory";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

/**
 * Concrete factory: Windows UI factory.
 */
export class WindowsUIFactory implements UIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }
  
  public createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}