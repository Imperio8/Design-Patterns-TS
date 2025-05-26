import { VendingMachine } from './VendingMachine';

/**
 * The State pattern is a behavioral design pattern that allows an object to alter its behavior
 * when its internal state changes. The object will appear to change its class.
 * 
 * Key benefits:
 * - Encapsulates state-specific behavior
 * - Makes state transitions explicit
 * - State objects can be shared
 * - Eliminates conditional statements
 * 
 * Common use cases:
 * - Vending machines
 * - Traffic lights
 * - Game state machines
 * - Workflow engines
 */
export function stateExample(os: string): void {
  console.log('\nState Pattern Example: Vending Machine\n');

  const vendingMachine = new VendingMachine();

  // Try to select item without money
  console.log('Attempting to select item without money:');
  vendingMachine.selectItem('Coke');
  vendingMachine.dispenseItem();

  // Insert money and select item
  console.log('\nInserting money and selecting item:');
  vendingMachine.insertMoney(3);
  vendingMachine.selectItem('Coke');
  vendingMachine.dispenseItem();

  // Try to select another item
  console.log('\nAttempting to select another item:');
  vendingMachine.selectItem('Pepsi');
  vendingMachine.dispenseItem();

  // Eject remaining money
  console.log('\nEjecting remaining money:');
  vendingMachine.ejectMoney();
} 