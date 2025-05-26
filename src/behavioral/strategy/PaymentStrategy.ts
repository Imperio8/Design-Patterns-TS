/**
 * The PaymentStrategy interface declares operations common to all supported payment methods.
 */
export interface PaymentStrategy {
  pay(amount: number): void;
}

/**
 * CreditCardStrategy represents a payment method using a credit card.
 */
export class CreditCardStrategy implements PaymentStrategy {
  private cardNumber: string;
  private name: string;
  private cvv: string;
  private dateOfExpiry: string;

  constructor(cardNumber: string, name: string, cvv: string, dateOfExpiry: string) {
    this.cardNumber = cardNumber;
    this.name = name;
    this.cvv = cvv;
    this.dateOfExpiry = dateOfExpiry;
  }

  public pay(amount: number): void {
    console.log(`${amount} paid with credit/debit card`);
    console.log(`Card Number: ${this.cardNumber}`);
    console.log(`Name: ${this.name}`);
    console.log(`CVV: ${this.cvv}`);
    console.log(`Date of Expiry: ${this.dateOfExpiry}`);
  }
}

/**
 * PayPalStrategy represents a payment method using PayPal.
 */
export class PayPalStrategy implements PaymentStrategy {
  private emailId: string;
  private password: string;

  constructor(emailId: string, password: string) {
    this.emailId = emailId;
    this.password = password;
  }

  public pay(amount: number): void {
    console.log(`${amount} paid using PayPal`);
    console.log(`Email ID: ${this.emailId}`);
  }
}

/**
 * CryptoStrategy represents a payment method using cryptocurrency.
 */
export class CryptoStrategy implements PaymentStrategy {
  private walletAddress: string;
  private cryptoType: string;

  constructor(walletAddress: string, cryptoType: string) {
    this.walletAddress = walletAddress;
    this.cryptoType = cryptoType;
  }

  public pay(amount: number): void {
    console.log(`${amount} paid using ${this.cryptoType}`);
    console.log(`Wallet Address: ${this.walletAddress}`);
  }
} 