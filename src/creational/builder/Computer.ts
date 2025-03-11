/**
 * The product: A computer with various components.
 */
export class Computer {
  public cpu: string = "";
  public gpu: string = "";
  public ram: string = "";
  public storage: string = "";
  
  public displayConfiguration(): void {
    console.log(`Computer Configuration:
      CPU: ${this.cpu}
      GPU: ${this.gpu}
      RAM: ${this.ram}
      Storage: ${this.storage}`);
  }
}