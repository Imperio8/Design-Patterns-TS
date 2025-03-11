import { Prototype } from "./Prototype";

/**
 * Concrete prototype: A document with content and formatting.
 */
export class Document implements Prototype {
  public content: string;
  public formatting: string;
  
  constructor(content: string, formatting: string) {
    this.content = content;
    this.formatting = formatting;
  }
  
  /**
   * Clone the document.
   * @returns A new Document instance with the same content and formatting.
   */
  public clone(): Document {
    return new Document(this.content, this.formatting);
  }
  
  /**
   * Display the document details.
   */
  public display(): void {
    console.log(`Document:
      Content: ${this.content}
      Formatting: ${this.formatting}`);
  }
}