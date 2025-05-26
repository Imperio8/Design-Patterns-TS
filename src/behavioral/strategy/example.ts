import { PaymentContext } from './PaymentContext';
import { CreditCardStrategy } from './PaymentStrategy';
import { PayPalStrategy } from './PaymentStrategy';
import { CryptoStrategy } from './PaymentStrategy';

/**
 * The Strategy pattern is a behavioral design pattern that enables selecting an algorithm at runtime.
 * Instead of implementing a single algorithm directly, code receives run-time instructions as to which
 * in a family of algorithms to use.
 * 
 * Key benefits:
 * - Encapsulates what varies
 * - Favor composition over inheritance
 * - Program to an interface, not an implementation
 * - Open/Closed Principle: New strategies can be added without modifying existing code
 * 
 * Common use cases:
 * - Different payment methods
 * - Different sorting algorithms
 * - Different compression algorithms
 * - Different validation strategies
 */
export function strategyExample(os: string): void {
  console.log('\nStrategy Pattern Example: Payment Processing System\n');

  // Create payment strategies
  const creditCardStrategy = new CreditCardStrategy(
    '1234-5678-9012-3456',
    'John Doe',
    '123',
    '12/25'
  );

  const paypalStrategy = new PayPalStrategy(
    'john.doe@example.com',
    'password123'
  );

  const cryptoStrategy = new CryptoStrategy(
    '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    'Ethereum'
  );

  // Create payment context with initial strategy
  const paymentContext = new PaymentContext(creditCardStrategy);

  // Process payment with credit card
  console.log('Processing payment with credit card:');
  paymentContext.executePayment(100);

  // Switch to PayPal strategy
  console.log('\nSwitching to PayPal:');
  paymentContext.setStrategy(paypalStrategy);
  paymentContext.executePayment(200);

  // Switch to Crypto strategy
  console.log('\nSwitching to Crypto:');
  paymentContext.setStrategy(cryptoStrategy);
  paymentContext.executePayment(300);
} 