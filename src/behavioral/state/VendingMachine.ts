/**
 * The State interface declares methods that all concrete states should implement.
 */
export interface VendingMachineState {
  insertMoney(amount: number): void;
  ejectMoney(): void;
  selectItem(item: string): void;
  dispenseItem(): void;
}

/**
 * NoMoneyState represents the state when no money has been inserted.
 */
export class NoMoneyState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  public insertMoney(amount: number): void {
    console.log(`Inserted ${amount} dollars`);
    this.machine.setMoney(amount);
    this.machine.setState(this.machine.getHasMoneyState());
  }

  public ejectMoney(): void {
    console.log("No money to eject");
  }

  public selectItem(item: string): void {
    console.log("Please insert money first");
  }

  public dispenseItem(): void {
    console.log("Please insert money first");
  }
}

/**
 * HasMoneyState represents the state when money has been inserted.
 */
export class HasMoneyState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  public insertMoney(amount: number): void {
    console.log(`Inserted ${amount} dollars`);
    this.machine.setMoney(this.machine.getMoney() + amount);
  }

  public ejectMoney(): void {
    console.log(`Ejecting ${this.machine.getMoney()} dollars`);
    this.machine.setMoney(0);
    this.machine.setState(this.machine.getNoMoneyState());
  }

  public selectItem(item: string): void {
    if (this.machine.hasItem(item)) {
      console.log(`Selected item: ${item}`);
      this.machine.setState(this.machine.getSoldState());
    } else {
      console.log("Item not available");
      this.ejectMoney();
    }
  }

  public dispenseItem(): void {
    console.log("Please select an item first");
  }
}

/**
 * SoldState represents the state when an item has been selected.
 */
export class SoldState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  public insertMoney(amount: number): void {
    console.log("Please wait, we're already giving you an item");
  }

  public ejectMoney(): void {
    console.log("Sorry, you already selected an item");
  }

  public selectItem(item: string): void {
    console.log("Please wait, we're already giving you an item");
  }

  public dispenseItem(): void {
    const item = this.machine.getSelectedItem();
    console.log(`Dispensing ${item}`);
    this.machine.setMoney(this.machine.getMoney() - this.machine.getItemPrice(item));
    this.machine.removeItem(item);
    
    if (this.machine.getMoney() > 0) {
      this.machine.setState(this.machine.getHasMoneyState());
    } else {
      this.machine.setState(this.machine.getNoMoneyState());
    }
  }
}

/**
 * The VendingMachine class maintains the current state and delegates state-specific behavior.
 */
export class VendingMachine {
  private noMoneyState: VendingMachineState;
  private hasMoneyState: VendingMachineState;
  private soldState: VendingMachineState;
  private currentState: VendingMachineState;
  private money: number = 0;
  private items: Map<string, number> = new Map();
  private selectedItem: string = '';

  constructor() {
    this.noMoneyState = new NoMoneyState(this);
    this.hasMoneyState = new HasMoneyState(this);
    this.soldState = new SoldState(this);
    this.currentState = this.noMoneyState;
    
    // Initialize with some items
    this.items.set('Coke', 2);
    this.items.set('Pepsi', 2);
    this.items.set('Sprite', 1.5);
  }

  public setState(state: VendingMachineState): void {
    this.currentState = state;
  }

  public getNoMoneyState(): VendingMachineState {
    return this.noMoneyState;
  }

  public getHasMoneyState(): VendingMachineState {
    return this.hasMoneyState;
  }

  public getSoldState(): VendingMachineState {
    return this.soldState;
  }

  public setMoney(money: number): void {
    this.money = money;
  }

  public getMoney(): number {
    return this.money;
  }

  public hasItem(item: string): boolean {
    return this.items.has(item);
  }

  public getItemPrice(item: string): number {
    return this.items.get(item) || 0;
  }

  public removeItem(item: string): void {
    this.items.delete(item);
  }

  public setSelectedItem(item: string): void {
    this.selectedItem = item;
  }

  public getSelectedItem(): string {
    return this.selectedItem;
  }

  // Public methods that delegate to the current state
  public insertMoney(amount: number): void {
    this.currentState.insertMoney(amount);
  }

  public ejectMoney(): void {
    this.currentState.ejectMoney();
  }

  public selectItem(item: string): void {
    this.setSelectedItem(item);
    this.currentState.selectItem(item);
  }

  public dispenseItem(): void {
    this.currentState.dispenseItem();
  }
} 