/**
 * Example usage of the Composite Pattern.
 * 
 * The Composite Pattern is a structural design pattern that lets you compose objects
 * into tree structures and then work with these structures as if they were individual objects.
 * 
 * Key benefits:
 * - Simplifies client code by treating individual objects and compositions uniformly
 * - Makes it easy to add new kinds of components
 * - Provides a flexible structure that can be used to represent part-whole hierarchies
 * 
 * In this example, we demonstrate a file system structure where:
 * - Files are leaf nodes (they can't contain other components)
 * - Folders are composite nodes (they can contain both files and other folders)
 * - Both files and folders implement the same interface, allowing them to be treated uniformly
 * - The structure can be traversed and operations can be performed on the entire tree
 */
import { File } from "./File";
import { Folder } from "./Folder";

export function compositeExample() {
  // Create files
  const file1 = new File("document.txt", 100);
  const file2 = new File("image.jpg", 200);
  const file3 = new File("script.js", 150);

  // Create folders
  const folder1 = new Folder("Documents");
  const folder2 = new Folder("Images");
  const rootFolder = new Folder("Root");

  // Add files to folders
  folder1.add(file1);
  folder2.add(file2);
  rootFolder.add(file3);

  // Add folders to root
  rootFolder.add(folder1);
  rootFolder.add(folder2);

  // Display the structure
  console.log("File System Structure:");
  rootFolder.display();
  
  // Calculate total size
  console.log(`\nTotal size: ${rootFolder.getSize()} bytes`);
} 