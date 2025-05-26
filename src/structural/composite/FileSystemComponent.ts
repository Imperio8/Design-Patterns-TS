/**
 * The Component interface declares common operations for both simple and complex objects
 * of a composition. This is the base interface that defines the common behavior for
 * all components in the composite structure.
 * 
 * When to use:
 * - When you want to represent part-whole hierarchies of objects
 * - When you want clients to be able to ignore the difference between compositions
 *   of objects and individual objects
 * - When you want to treat all objects in the composition uniformly
 */
export interface FileSystemComponent {
  getSize(): number;
  display(indentation?: string): void;
} 