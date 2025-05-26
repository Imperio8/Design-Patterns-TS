/**
 * Example usage of the Prototype Pattern.
 * 
 * The Prototype Pattern is a creational design pattern that lets you create new objects
 * by cloning an existing object, known as the prototype, instead of creating new instances
 * from scratch.
 * 
 * Key benefits:
 * - Reduces the need for subclassing
 * - Hides the complexity of creating new instances
 * - Provides an alternative to inheritance
 * - Reduces initialization overhead
 * 
 * Common use cases:
 * - When a system should be independent of how its products are created
 * - When the classes to instantiate are specified at run-time
 * - When you want to avoid building a class hierarchy of factories
 * - When instances of a class can have only a few different combinations of state
 * 
 * In this example, we demonstrate:
 * - A Document class that implements the prototype pattern
 * - The ability to create new documents by cloning existing ones
 * - Deep copying of object properties
 * - Maintaining independence between original and cloned objects
 */
import { Document } from "./Document";

/**
 * Example usage of the Prototype pattern.
 * Demonstrates cloning documents to create new ones.
 */
export function prototypeExample() {
  // Create an original document
  const originalDocument = new Document(
    "This is the original content.",
    "Times New Roman, 12pt"
  );
  
  console.log("Original Document:");
  originalDocument.display();
  
  // Clone the original document
  const clonedDocument = originalDocument.clone();
  
  // Modify the cloned document
  clonedDocument.content = "This is the modified content.";
  clonedDocument.formatting = "Arial, 14pt";
  
  console.log("\nCloned Document (Modified):");
  clonedDocument.display();
  
  // Verify that the original document remains unchanged
  console.log("\nOriginal Document (Unchanged):");
  originalDocument.display();
}