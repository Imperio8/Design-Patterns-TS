import {Button} from "./Button";
import {Checkbox} from "./Checkbox";

/**
 * Abstract factory interface for creating UI components.
 */
export interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}