import { ArrayCollection, MapCollection } from './Iterator';

/**
 * The Iterator pattern is a behavioral design pattern that lets you traverse elements of a collection
 * without exposing its underlying representation (list, stack, tree, etc.).
 * 
 * Key benefits:
 * - Single Responsibility Principle
 * - Open/Closed Principle
 * - Parallel iteration
 * - Delayed iteration
 * 
 * Common use cases:
 * - Collection traversal
 * - Tree traversal
 * - Graph traversal
 * - Database result sets
 */
export function iteratorExample(os: string): void {
  console.log('\nIterator Pattern Example: Collection Traversal\n');

  // Array collection example
  console.log('Array Collection:');
  const arrayCollection = new ArrayCollection<string>();
  arrayCollection.addItem('First');
  arrayCollection.addItem('Second');
  arrayCollection.addItem('Third');

  const arrayIterator = arrayCollection.createIterator();
  while (arrayIterator.hasNext()) {
    console.log(arrayIterator.next());
  }

  // Map collection example
  console.log('\nMap Collection:');
  const mapCollection = new MapCollection<string, number>();
  mapCollection.addItem('One', 1);
  mapCollection.addItem('Two', 2);
  mapCollection.addItem('Three', 3);

  const mapIterator = mapCollection.createIterator();
  while (mapIterator.hasNext()) {
    const [key, value] = mapIterator.next();
    console.log(`${key}: ${value}`);
  }
} 