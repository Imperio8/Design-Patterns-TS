/**
 * The Composite class represents the complex components that may have children.
 * Composite objects delegate the actual work to their children and then
 * "sum up" the results.
 * 
 * In this example, Folder represents a composite node in our file system structure.
 * It can contain both Files (leaf nodes) and other Folders (composite nodes),
 * forming a tree structure. The Folder class implements the same interface as
 * File, allowing clients to treat both uniformly.
 */
import { FileSystemComponent } from "./FileSystemComponent";

export class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }

  display(indentation: string = ""): void {
    console.log(`${indentation}Folder: ${this.name}`);
    this.children.forEach(child => child.display(indentation + "  "));
  }
} 