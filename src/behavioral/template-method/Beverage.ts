/**
 * The Beverage class defines the template method and primitive operations.
 */
export abstract class Beverage {
  /**
   * The template method defines the skeleton of an algorithm.
   */
  public prepareBeverage(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  /**
   * These operations have to be implemented by subclasses.
   */
  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  /**
   * These operations already have implementations.
   */
  protected boilWater(): void {
    console.log('Boiling water');
  }

  protected pourInCup(): void {
    console.log('Pouring into cup');
  }

  /**
   * This is a hook that subclasses can override.
   */
  protected customerWantsCondiments(): boolean {
    return true;
  }
}

/**
 * Coffee class implements the template method.
 */
export class Coffee extends Beverage {
  protected brew(): void {
    console.log('Dripping coffee through filter');
  }

  protected addCondiments(): void {
    console.log('Adding sugar and milk');
  }
}

/**
 * Tea class implements the template method.
 */
export class Tea extends Beverage {
  protected brew(): void {
    console.log('Steeping the tea');
  }

  protected addCondiments(): void {
    console.log('Adding lemon');
  }
}

/**
 * CoffeeWithHook class demonstrates the use of hooks.
 */
export class CoffeeWithHook extends Beverage {
  private wantsCondiments: boolean;

  constructor(wantsCondiments: boolean = true) {
    super();
    this.wantsCondiments = wantsCondiments;
  }

  protected brew(): void {
    console.log('Dripping coffee through filter');
  }

  protected addCondiments(): void {
    console.log('Adding sugar and milk');
  }

  protected customerWantsCondiments(): boolean {
    return this.wantsCondiments;
  }
} 