/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children. Usually, it's the leaf objects that do the actual work, while
 * composite objects only delegate to their sub-components.
 * 
 * In this example, File represents a leaf node in our file system structure.
 * It implements the basic operations defined in the FileSystemComponent interface.
 */
import { FileSystemComponent } from "./FileSystemComponent";

export class File implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getSize(): number {
    return this.size;
  }

  display(indentation: string = ""): void {
    console.log(`${indentation}File: ${this.name} (${this.size} bytes)`);
  }
} 