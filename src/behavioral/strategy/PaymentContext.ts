import { PaymentStrategy } from './PaymentStrategy';

/**
 * The PaymentContext maintains a reference to one of the concrete strategies
 * and communicates with this object via the strategy interface.
 */
export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
} 