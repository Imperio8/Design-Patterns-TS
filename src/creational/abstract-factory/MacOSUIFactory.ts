import { UIFactory } from "./UIFactory";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { MacOSButton } from "./MacOSButton";
import { MacOSCheckbox } from "./MacOSCheckbox";

/**
 * Concrete factory: macOS UI factory.
 */
export class MacOSUIFactory implements UIFactory {
  public createButton(): Button {
    return new MacOSButton();
  }
  
  public createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}