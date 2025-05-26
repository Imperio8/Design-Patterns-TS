import { Coffee, Tea, CoffeeWithHook } from './Beverage';

/**
 * The Template Method pattern is a behavioral design pattern that defines the skeleton of an algorithm
 * in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
 * 
 * Key benefits:
 * - Code reuse
 * - Inverted control structure
 * - Consistent algorithm structure
 * - Hooks for customization
 * 
 * Common use cases:
 * - Algorithm frameworks
 * - Document generation
 * - Data processing pipelines
 * - Build processes
 */
export function templateMethodExample(os: string): void {
  console.log('\nTemplate Method Pattern Example: Beverage Preparation\n');

  // Prepare coffee
  console.log('Preparing coffee:');
  const coffee = new Coffee();
  coffee.prepareBeverage();

  // Prepare tea
  console.log('\nPreparing tea:');
  const tea = new Tea();
  tea.prepareBeverage();

  // Prepare coffee with hook (no condiments)
  console.log('\nPreparing coffee without condiments:');
  const coffeeWithoutCondiments = new CoffeeWithHook(false);
  coffeeWithoutCondiments.prepareBeverage();
} 