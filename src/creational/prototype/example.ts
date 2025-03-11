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